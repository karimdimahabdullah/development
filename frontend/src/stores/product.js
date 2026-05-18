import {create} from "zustand"

export const useProductStore = create((set)=> ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (products) => {
        if(!products.name || !products.price || !products.image){
            return {success: false, message: "Please fill all the fields"}
        }
        try {
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(products)
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));// Try to parse error response, but if it fails, use a generic message 
            return {
                success: false,
                message: errorData.message || `Request failed with status ${res.status}`
            };
        }// If the response is successful, parse the JSON data and update the products state

        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created successfully" };
    } catch (error) {
        return { success: false, message: error.message || "Network request failed" };
    }},
    fetchProducts: async () => {
        try {
            const res = await fetch("/api/products");
            if (!res.ok) {
                return;
            }
            const data = await res.json();
            set({ products: data.data ?? [] });
        } catch {
            set({ products: [] });
        }
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) {
            return {success: false, message: data.message};
        }
        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
        return {success: true, message: data.message};
    },
    updateProduct: async (pid, product) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product),
        })
        const data = await res.json();

        if (!data.success) {
            return { success: false, message: data.message }
        }
        set((state) => ({
            products: state.products.map((p) =>
                p._id === pid ? data.data : p
            ),
        }));
        return { success: true, message: data.message };
    }

}))
