import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { ClientOnly} from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuSun } from "react-icons/lu"
import { IoMoon } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="1140px" px={4}>
      <Flex
      height={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{ base: "column", sm: "row" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text
            as="span"
            display="inline-block"
            fontSize={{ base: "1xl", sm: "2xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            lineHeight="shorter"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip="text"
            color="transparent"
          >
            Product Store 🛒
          </Text>
        </Link>
        <HStack spacing={2} textAlign={"center"}>
          <ClientOnly>
            <Link to={"/create"}>
            <Button fontSize={20} variant={"outline"} >
                <AiOutlinePlusSquare />
            </Button>
            </Link>
          </ClientOnly>
          <ClientOnly>
            <Button onClick={toggleColorMode} variant="outline">
              {colorMode === "light" ? <IoMoon /> : <LuSun />}
            </Button>
          </ClientOnly>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
