import { Box, Flex } from "@chakra-ui/react"
import { Footer } from "../components/Footer"
import { Body } from "../components/Body"
import { WhatsApp } from "../components/WhatsApp"
import { Seta } from "../components/Seta"

const Home = () => {
  return (
      <Box>
        <Body />
        <Flex justifyContent={"center"}>
        <Seta  href="#comment" cursor={'pointer'} />
        </Flex>
        <Footer />
        <WhatsApp />
      </Box>

    )
}

export default Home
