import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1976b2',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
        // alignItems: 'center'
      }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
