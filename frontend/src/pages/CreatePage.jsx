import { Container, VStack, Heading, Box, Input, Button} from "@chakra-ui/react"
import { useColorModeValue} from "@/components/ui/color-mode"
import { toaster } from "@/components/ui/toaster"
import { useState } from "react"
import { useProductStore } from "../stores/product"

const CreatePage = () => {
  const {createProduct} = useProductStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  const addProducts = async () => {    // Logic to add the new product
    const {success, message} = await createProduct(newProduct);
    if(!success) {
      toaster.create({
        type: "error",
        description: message,
        closable: true,
      })
    } else {
      toaster.create({
        type: "success",
        description: message,
        closable: true,
      })
      }
      setNewProduct({
        name: "",
        price: "",
        image: "",
      })  // Clear the form after adding the product
  }
  const bg = useColorModeValue("white", "gray.900")

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create Product Page
        </Heading>
        <Box w="full" bg={bg} p={4} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input 
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
             />
            <Input 
            placeholder="Price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
             />
            <Input 
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
             />
             <Button w="full" colorPalette="blue" variant="solid" onClick={addProducts}>
               Add Product
             </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
