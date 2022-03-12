import {  AspectRatio, Box, Flex, Grid, HStack, Stack, Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import Link from "next/link"
import { useRef } from "react"
import { Seta } from "./Seta"

export const Body = () => {


    return (
        <Box>
        <Flex justifyContent="center" align="center" h={["70vh", "70vh", "75vh"]} flexDir="column">
            <Text fontSize={['2xl', "2xl", "5xl"]} letterSpacing="tight">
				Meire Podóloga
				<Text as="span" ml="1" color="pink.500">.</Text>
			</Text>
            <Text as="span" fontSize={['1rem', "1rem", "4xl"]} color="pink.500">Se cuidar sempre é importante</Text>
            <AspectRatio mb={3} w={['300px', '450px', '560px']} ratio={[2/0.8, 2/0.8, 2/1]}>
            <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
            />
        </AspectRatio>
            <Box textAlign="start">
                <Text mt={5} mb={5}>Meus Serviços:</Text>
                <Grid templateColumns={["1fr","1fr","1fr 1fr"]} >
                    <Box mr={10}>
                        <Text as="span" mr="1" color="pink.500">º</Text>
                        Onicocriptose ou Unha Encravada
                    </Box>
                    <Box>
                    <Text as="span" mr="1" color="pink.500">º</Text>
                        Calos/Calosidades
                    </Box>
                    <Box><Text as="span" mr="1" color="pink.500">º</Text>Pés Diabéticos</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Podologia Infanil</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Podologia Esportiva</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Correção das Unhas (órtese)</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Verrugas Plantar</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Psoriase</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Tinêa Pedis</Box>
                    <Box> <Text as="span" mr="1" color="pink.500">º</Text>Onicomicise (Micoses ungueais)</Box>  
                </Grid>
            </Box>
        </Flex>       
        <Flex flexDir="column" alignItems="center">
        <Text fontSize={['1rem', '1rem', '1.2rem']} w={'15rem'} as="span" color="pink.500">Me acompanhe no instagram para saber mais dos meus trabalhos...</Text>
            <Link href="https://api.whatsapp.com/send?phone=5527997998675&text=Olá, gostaria de saber mais sobre os produtos">
                <Image mb={3} cursor="pointer" w={10} mt={1} h={10} src="instagram.png" alt="icone do instagram "/>
            </Link>
        </Flex>
        <Flex justifyContent="center">
</Flex>

    </Box>

    )
}