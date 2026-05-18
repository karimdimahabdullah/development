import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Dialog,
  Portal,
  useDisclosure,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { useColorModeValue } from "@/components/ui/color-mode"
import { useProductStore } from "../stores/product"
import { toaster } from "@/components/ui/toaster"
import { useState } from "react"

const ProductCards = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product)
  const bg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.800", "white")
  const { open, onOpen, onClose, setOpen } = useDisclosure()

  const { deleteProduct, updateProduct } = useProductStore()

  const handleOpenEdit = () => {
    setUpdatedProduct(product)
    onOpen()
  }

  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id)
    if (!success) {
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
  }

  const handleUpdatedProduct = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct)
    if (!success) {
      toaster.create({
        type: "success",
        description: message,
        closable: true,
      })
      onClose()
    } else {
      toaster.create({
        type: "error",
        description: "Product Updated Successfully",
        closable: true,
      })
    }
  }

  return (
    <>
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={
          open ? undefined : { transform: "translateY(-5px)", shadow: "xl" }
        }
        bg={bg}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          objectFit="cover"
        />
        <Box p={4}>
          <Heading as="h3" size="md" mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
            ${product.price}
          </Text>
          <HStack spacing={2}>
            <IconButton
              aria-label="Edit product"
              colorPalette="blue"
              variant="solid"
              onClick={handleOpenEdit}
            >
              <AiOutlineEdit />
            </IconButton>
            <IconButton
              aria-label="Delete product"
              colorPalette="red"
              variant="solid"
              onClick={handleDeleteProduct}
            >
              <AiOutlineDelete />
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Update Product</Dialog.Title>
              </Dialog.Header>
              <Dialog.CloseTrigger />
              <Dialog.Body>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Button colorPalette="blue" mr={3} onClick={handleUpdatedProduct}>
                  Update
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}

export default ProductCards
