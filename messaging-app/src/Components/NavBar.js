import React from 'react'
import { Box, Center, Flex, Link} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Box p={4} bgColor='#283e4a'>
            <Center color='white'>
                <Link mr={3} href='/network'> My Network</Link>
                <Link href='/messaging'>Messaging</Link>
            </Center>
        </Box>
    )
}

export default NavBar
