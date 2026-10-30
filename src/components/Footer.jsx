import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', px: 4, py: 4, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © 2026 Mitflix
      </Typography>
    </Box>
  )
}

export default Footer
