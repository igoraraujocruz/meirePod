import { Flex, Image } from "@chakra-ui/react"
import podologiaImage from '../utils/pod.jpeg'

export const Slider = () => {
    return (
        <Flex mt={10} w="100%" h={["200px","500px"]} justifyContent="center">
            <Image src='pod.jpeg' alt="Podologia"  w={["200px","500px"]}  />
        </ Flex>
    )
}