import { useState } from 'react'
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
} from '@mui/material'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card variant="outlined">
        <CardContent sx={{ p: 4 }}>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <img src="/favicon.png" alt="logo" style={{ width: 32, height: 32 }} />
            <Typography variant="h5" fontWeight="bold" color="primary">
              Mitflix
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom>
            Masuk ke Akun
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Silakan masuk untuk melanjutkan menonton
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button variant="contained" color="primary" fullWidth size="large">
            Masuk
          </Button>

          <Button variant="text" color="inherit" fullWidth sx={{ mt: 1, color: 'text.secondary' }}>
            Belum punya akun? Daftar
          </Button>

        </CardContent>
      </Card>
    </Container>
  )
}

export default LoginPage
