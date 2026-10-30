import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function Navbar({ halaman, setHalaman }) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1, cursor: 'pointer' }}
          onClick={() => setHalaman('beranda')}
        >
          <img src="/favicon.png" alt="logo" style={{ width: 28, height: 28 }} />
          <Typography variant="h6" sx={{ color: '#F06292', fontWeight: 'bold', letterSpacing: 1 }}>
            Mitflix
          </Typography>
        </Box>

        <Button
          color="inherit"
          onClick={() => setHalaman('beranda')}
          sx={{ fontWeight: halaman === 'beranda' ? 'bold' : 'normal' }}
        >
          Beranda
        </Button>
        <Button
          color="inherit"
          onClick={() => setHalaman('login')}
          sx={{ fontWeight: halaman === 'login' ? 'bold' : 'normal' }}
        >
          Masuk
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
