import * as React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SimpleSidebar from './assets/components/SimpleSidebar'

function App() {
  const children = null
  return (
    <ChakraProvider>
      <SimpleSidebar children={children}/>
    </ChakraProvider>
  )
}

export default App
