import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Box, Button, Input, SimpleGrid, Textarea, Container, Center} from '@chakra-ui/react'
import {Formik, Form} from 'formik'

const Login = () => {
    
    const initialValues = {
      name: '',
      email: '',
      description:'',
      id: Math.ceil(Math.random() *10000),
      role: 'Member',
      image: 'https://talkjs.com/docs/img/ronald.jpg'
    }

    const history = useHistory()

    const onSubmit = (values) =>{
        let user={...values}
        console.log(user)
        /* Store user data in browser's local storage */
        localStorage.setItem('currentTalkjsUser', JSON.stringify(user))

        // /*Redirect to the my network page */
        history.push('/network')
       
    }
    return (
      <Box>
          <Formik initialValues={initialValues}
                onSubmit= {onSubmit}
            >
              {({
                values,
                handleSubmit,
                handleChange,
              }) => (
                <Form onSubmit={handleSubmit}>
                    <Container maxW={{ md:'50%'}} p={6} bgColor='gray.100' my='5%' >
                            <SimpleGrid columns={2} spacing={4} mb={4}>
                                <Input 
                                    placeholder ='Name'
                                    value={values.name}
                                    onChange={handleChange}
                                    name='name'
                                    _placeholder={{ color: '#283e4a'}}
                                    borderColor='#283e4a'
                                />
                                <Input 
                                    placeholder ='Email'
                                    name='email'
                                    value={values.email}
                                    _placeholder={{ color: '#283e4a'}}
                                    borderColor='#283e4a'
                                    onChange={handleChange}
                                />
                            </SimpleGrid>
                            <Textarea 
                                borderColor='#283e4a'
                                name='description'
                                onChange={handleChange}
                                value={values.description}
                                _placeholder={{ color: '#283e4a'}}
                                placeholder='Short Description'
                                mb={4}
                            />
                            <Center>
                                <Button type='submit' bgColor='#283e4a' color='white' borderRadius='none' px={6} _hover={{ textDecor : 'none'}} > Submit</Button>
                            </Center>
                        </Container>
                </Form>
              )}
          </Formik>
      </Box>
    )
}

export default Login
