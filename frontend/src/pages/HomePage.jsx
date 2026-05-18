import { Container,VStack, Text, SimpleGrid} from "@chakra-ui/react"
import { useEffect } from "react"
import {Link} from "react-router-dom"
import { useProductStore } from "../stores/product"
import ProductCards from "../component/ProductCards"




const Homepage = () => {
 const {fetchProducts, products} =  useProductStore()
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  return (
    <Container
    maxW={"container.xl"}
    py={12}
    >
      <VStack
      spacing={8}
      >
        <Text
          display="inline-block"
          fontSize={{ base: "1xl", md: "2xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip="text"
          color="transparent"
          textAlign="center"
        >
          Current Products 🚀
        </Text>
        <SimpleGrid
          columns={[1,
             2, 
             3
            ]} 
          gap="40px"
          spacing={10}
          w={"full"}
        >
          {products.map((product)=> {
            return <ProductCards key = {product._id} product = {product}/>
          })}
        </SimpleGrid>
         {products.length === 0 && (
          <Text
        fontSize="xl" 
        textAlign={"center"}
        fontWeight='bold'
        color='gray.500'
        >
          No products found 😓 {" "}
          <Link to={"/create"}>
          <Text as='span'
          color='blue.500'
          _hover={{textDecoration: "underline"}}
          >
            Create a product
          </Text>
          </Link>
        </Text>
         )}
      </VStack>

    </Container>
  )
}

export default Homepage
