import { useState } from 'react'
import { ThemeProvider, CssBaseline, createTheme, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BerandaPage from './pages/BerandaPage'
import LoginPage from './pages/LoginPage'

const tema = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F06292' },
    secondary: { main: '#CE93D8' },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
})

function App() {
  const [halaman, setHalaman] = useState('beranda')

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar halaman={halaman} setHalaman={setHalaman} />
        <Box sx={{ flexGrow: 1 }}>
          {halaman === 'beranda' && <BerandaPage />}
          {halaman === 'login' && <LoginPage />}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
