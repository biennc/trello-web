import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) =>
          `calc(100vh -${theme.trello.boardBarHeight} - ${theme.trello.BoardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}></Box>
  )
}

export default BoardContent
