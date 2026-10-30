import { Box, Typography, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function HeroBanner() {
  return (
    <Box sx={{ p: 4, bgcolor: '#1a1a1a' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Squid Game: Season 3
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        2026 · Korea ·  9.0
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 480 }}>
        Kembalinya Gi-hun dalam permainan mematikan yang lebih gelap dari sebelumnya.
      </Typography>
      <Button variant="contained" color="primary" startIcon={<PlayArrowIcon />}>
        Tonton
      </Button>
    </Box>
  )
}

export default HeroBanner
