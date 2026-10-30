import { Card, CardContent, CardActions, Typography, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function MovieCard({ film }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle2" fontWeight="bold" noWrap>
          {film.judul}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {film.genre} · {film.tahun} ·  {film.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" startIcon={<PlayArrowIcon />}>
          Putar
        </Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard
