import React from 'react'
import {dummyUsers} from './Users'
import { Box, Avatar, Heading, Text, Button, Flex, Container, Spacer, Divider } from '@chakra-ui/react'

const MyNetwork = () =>{
    return (
       <Box >
         <Container m='auto' maxW='40%' my='5%' borderWidth={1} borderColor='#283e4a' p={6} borderRadius={3}>
            {
              dummyUsers.map( user => (
                <Box mb={4} >
                  <Flex key={user.id}>
                      <Avatar size='lg' src={user.photoUrl} alt={user.name}/>
                      <Box mt={3} mx={4}>
                        <Heading fontSize='17px'>{user.name}</Heading>
                        <Text>{user.info}</Text>
                      </Box>
                      <Spacer/>
                      <Button 
                        bgColor='transparent' 
                        borderColor='#0073b1'
                        borderWidth={1}
                        color='#0073b1'
                        _hover={{ textDecor: 'none'}}
                        size='sm'
                        mt={6}
                      >
                        Message
                      </Button>
                  </Flex>
                  <Divider orientation='horizontal' mt={1} w='85%' ml='15%'/>
                </Box>
              ))
            }
         </Container>
       </Box>
    )
}

export default MyNetwork
