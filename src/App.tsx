import * as React from 'react'
import './App.scss'
import { ChakraProvider } from '@chakra-ui/react'
import SimpleSidebar from './components/SimpleSidebar'
import { useRoutes } from "react-router-dom";
import SignupCard from './components/SignupCard';




function App() {
  //routes
  const routes = useRoutes([
    {
      path: "/",
      element: <SignupCard />,
    },

  ]);
  const children = null
  return (
    <div>
      <ChakraProvider>
        <SimpleSidebar children={children}></SimpleSidebar>
        {routes}
      </ChakraProvider>
    </div>

  )
}

export default App
