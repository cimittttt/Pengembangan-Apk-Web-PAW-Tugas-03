import { Box, Typography, Grid } from '@mui/material'
import MovieCard from './MovieCard'

function MovieSection({ judul, daftarFilm }) {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {judul}
      </Typography>
      <Grid container spacing={2}>
        {daftarFilm.map((film) => (
          <Grid key={film.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <MovieCard film={film} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MovieSection
