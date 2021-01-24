import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Box, Button, Input, SimpleGrid, Textarea, Container, Center} from '@chakra-ui/react'

const Login = () => {
    const [name, setName] = useState(''),
          [email, setEmail ] = useState(''),
          [ description, setDescription ] =useState('');

    const history = useHistory()
  
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail =(e) =>{
        setEmail(e.target.value)
    }
    const handleDesc = (e)=>{
        setDescription(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let users  = JSON.parse(localStorage.getItem('users'))

        // let user = users[name]
        //generating a random number to serve as user id
        const randomNumb = Math.ceil(Math.random() *10000)

        // const userData ={
        //     name,email,description,id: randomNumb, role: 'Member', image:'https://talkjs.com/docs/img/ronald.jpg'
        // }

        //storing user data in browser's local storage
        history.push('/network')
    }
    return (
      <Box>
           <form onSubmit={handleSubmit}>
               <Container maxW={{ md:'50%'}} p={6} bgColor='gray.100' my='5%' >
                    <SimpleGrid columns={2} spacing={4} mb={4}>
                        <Input 
                            onChange={handleName}
                            placeholder ='Name'
                            name='name'
                            _placeholder={{ color: '#283e4a'}}
                            borderColor='#283e4a'
                        />
                        <Input 
                            onChange={handleEmail}
                            placeholder ='Email'
                            name='email'
                            _placeholder={{ color: '#283e4a'}}
                            borderColor='#283e4a'
                        />
                    </SimpleGrid>
                    <Textarea 
                        borderColor='#283e4a'
                        onChange={handleDesc}
                        name='description'
                        _placeholder={{ color: '#283e4a'}}
                        placeholder='Short Description'
                        mb={4}
                    />
                    <Center as='a' href='/network'>
                        <Button type='button' bgColor='#283e4a' color='white' borderRadius='none' px={6} _hover={{ textDecor : 'none'}} > Submit</Button>
                    </Center>
                </Container>
           </form>
      </Box>
    )
}

export default Login
