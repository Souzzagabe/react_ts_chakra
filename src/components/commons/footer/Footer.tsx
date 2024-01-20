import { Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex p="20px" width="100%" direction="row" justify={["center", "space-between"]} background="#14151E" align="center" justifyContent="center" >
        <Text color="#FFFF" align="center">
        © 2024 <Link href='https://www.linkedin.com/in/gabriel-souza-0b6601269/' target='blank' textDecoration="none">@Souzzagabe</Link>. All rights reserved.
        </Text>
        
    </Flex>
  )
}

export default Footer