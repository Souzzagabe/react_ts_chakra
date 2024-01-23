import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from './styles/theme.ts'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <Router>
      <App />
      </Router>
    </ChakraBaseProvider>
  </React.StrictMode>
)
