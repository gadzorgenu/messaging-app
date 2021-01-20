import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Box, Button, Input, SimpleGrid, Textarea} from '@chakra-ui/react'

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
                <SimpleGrid columns={2} spacing={4}>
                    <Input 
                        onChange={handleName}
                        placeholder ='Name'
                        name='name'
                    />
                    <Input 
                        onChange={handleEmail}
                        placeholder ='Email'
                        name='email'
                    />
                </SimpleGrid>
                <Textarea 
                    onChange={handleDesc}
                    name='description'
                    placeholder='Short Description'
                />
                <Button type='button'> Submit</Button>
           </form>
      </Box>
    )
}

export default Login
