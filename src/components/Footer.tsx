import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"

export const Footer = () => {


    return (
        <Box h="100%" p={30} textAlign="center" bg="footer">

            <Text pt={10} fontSize={["2xl"]} letterSpacing="tight" color="white">
				Pessoas que confiaram no meu trabalho
		    </Text>
            <Grid templateColumns={["1fr","1fr","1fr 1fr", "1fr 1fr 1fr"]} >
                <Flex id={'comment'} mt="2rem" align="center" flexDir="column">
                    <Text fontSize={["1.3rem"]} mb={1} letterSpacing="tight" color="white">
                        João da Silva
                    </Text>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Text textAlign="left" fontSize="1.2rem" maxW={350} letterSpacing="tight" color="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum aperiam eos rerum adipisci molestias optio at, fugit nostrum nisi vitae veritatis ullam deserunt hic quis facere aspernatur saepe est.
                    </Text>
                </Flex>
                <Flex mt="2rem" align="center" flexDir="column">
                    <Text fontSize={["1.3rem"]} mb={1} letterSpacing="tight" color="white">
                        João da Silva
                    </Text>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Text textAlign="left" fontSize="1.2rem" maxW={350} letterSpacing="tight" color="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum aperiam eos rerum adipisci molestias optio at, fugit nostrum nisi vitae veritatis ullam deserunt hic quis facere aspernatur saepe est.
                    </Text>
                </Flex>
                <Flex mt="2rem" align="center" flexDir="column">
                    <Text fontSize={["1.3rem"]} mb={1} letterSpacing="tight" color="white">
                        João da Silva
                    </Text>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Text textAlign="left" fontSize="1.2rem" maxW={350} letterSpacing="tight" color="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum aperiam eos rerum adipisci molestias optio at, fugit nostrum nisi vitae veritatis ullam deserunt hic quis facere aspernatur saepe est.
                    </Text>
                </Flex>
                <Flex mt="2rem" align="center" flexDir="column">
                    <Text fontSize={["1.3rem"]} mb={1} letterSpacing="tight" color="white">
                        João da Silva
                    </Text>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Text textAlign="left" fontSize="1.2rem" maxW={350} letterSpacing="tight" color="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum aperiam eos rerum adipisci molestias optio at, fugit nostrum nisi vitae veritatis ullam deserunt hic quis facere aspernatur saepe est.
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}