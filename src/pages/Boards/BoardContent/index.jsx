import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1976b2',
        width: '100%',
        height: (theme) =>
          `calc(100vh -${theme.trello.boardBarHeight} - ${theme.trello.BoardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}></Box>
  )
}

export default BoardContent
