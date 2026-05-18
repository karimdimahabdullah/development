
import {Box} from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NavBar from "./component/Navbar"
import {useColorModeValue} from "@/components/ui/color-mode"
import { Toaster } from "@/components/ui/toaster"


function App() {
  const bgColor = useColorModeValue("gray.100", "gray.900")
  
  return (
    <Box minH={"100vh"} bg={bgColor}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
        <Toaster/>
    </Box>
  )

}

export default App
