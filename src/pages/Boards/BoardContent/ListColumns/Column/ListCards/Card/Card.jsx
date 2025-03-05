import { Attachment, Comment, Group } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

function TrelloCard() {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0, 0.2)',
        overflow: 'unset'
      }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/static/images/cards/contemplative-reptile.jpg'
        title='green iguana'
      />
      <CardContent sx={{ p: 1.5, '$:last-child': { p: 1.5 } }}>
        <Typography gutterBottom component='div'>
          biennguyen_dev
        </Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size='small' startIcon={<Group />}>
          10
        </Button>
        <Button size='small' startIcon={<Comment />}>
          7
        </Button>
        <Button size='small' startIcon={<Attachment />}>
          5
        </Button>
      </CardActions>
    </Card>
  )
}

export default TrelloCard
