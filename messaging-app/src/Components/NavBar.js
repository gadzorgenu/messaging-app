import React from 'react'
import { Box, Center, Flex, Link} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Box p={4} bgColor='#283e4a'>
            <Center>
                <Link mr={3}> My Network</Link>
                <Link>messaging</Link>
            </Center>
        </Box>
    )
}

export default NavBar
