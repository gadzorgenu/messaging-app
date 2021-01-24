import React,{useState} from 'react'
import {dummyUsers} from './Users'
import { Box, Avatar, Heading, Text, Button, Flex, Container, Spacer, Divider } from '@chakra-ui/react'
import Talk from 'talkjs'

const MyNetwork = () =>{
  const [currentUser] = useState('')
  let currentUser;
  const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
  if (currentTalkjsUser) {
  currentUser = JSON.parse(currentTalkjsUser)
  }

  const handleClick = (userId) =>{
    /* Retrieve the two users that will participate in the conversation */
    let currentUser;
    const user = dummyUsers.find(user => user.id === userId)

    /* Session initialization code */
    Talk.ready
    .then(() => {
    /* Create the two users that will participate in the conversation */
    const me = new Talk.User(currentUser);
    const other = new Talk.User(user)
    
    /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
    if (!window.talkSession) {
    window.talkSession = new Talk.Session({
    appId: process.env.talkId,
    me: me
    });
    } 
    
    /* Get a conversation ID or create one */
    const conversationId = Talk.oneOnOneId(me, other);
    const conversation = window.talkSession.getOrCreateConversation(conversationId);
    
    /* Set participants of the conversations */
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    
    /* Create and mount chatbox in container */
    this.chatbox = window.talkSession.createChatbox(conversation);
    this.chatbox.mount(this.container);
    }) 
    .catch(e => console.error(e));
    }
  }
    return (
       <Box >
         {
           currentUser && 
           <Box>
              <Avatar src={currentUser.photoUrl} alt={currentUser.name}/>
                <Box>
                  <Heading>{currentUser.name}</Heading>
                  <Text>{currentUser.description}</Text>
                </Box>
            </Box>
         }
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
                        onClick={(userId)=> handleClick(user.id)}
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
