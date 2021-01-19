import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"


const MessagingApp = () => {
  return (
    <ChakraProvider>
            <App />
    </ChakraProvider>
  )
}

ReactDOM.render(<MessagingApp />, document.getElementById('root'))