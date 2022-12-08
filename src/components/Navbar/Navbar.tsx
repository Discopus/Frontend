import { Box, Button, Center, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <Flex borderBottom={"1px"} borderColor={"gray.700"} position="sticky">
      <Flex direction={"row"} padding={4} justify="space-between" marginX={"auto"} width={"1440px"}>
        <Link href={"/"}>
          <Heading size={"lg"}>Discopus</Heading>
        </Link>
        <HStack spacing={12}>
          <Button variant={"link"} fontSize={"lg"} color="gray.400" _hover={{color: "gray.200"}}>
            <Link href={"/companies"}>
              Companies
            </Link>
          </Button>
          <Button variant={"link"} fontSize={"lg"} color="gray.400" _hover={{color: "gray.200"}}>
            <Link href={"/universities"}>
              Universities
            </Link>
          </Button>
          <Button variant={"link"} fontSize={"lg"} color="gray.400" _hover={{color: "gray.200"}}>
            <Link href={"/projects"}>
              Projects
            </Link>
          </Button>
          <Button variant={"link"} fontSize={"lg"} color="gray.400" _hover={{color: "gray.200"}}>
            <Link href={"/tasks"}>
              Tasks
            </Link>
          </Button>
        </HStack>
        <HStack>
          <Button variant={"ghost"}>Login</Button>
          <Button colorScheme={"cyan"}>Sign Up</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Navbar