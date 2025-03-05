import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import { NoteAdd } from '@mui/icons-material'

function ListColumns() {
  return (
    <Box
      sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
      <Column />
      <Box sx={{}}>
        <Button startIcon={NoteAdd} sx={{ color: 'white' }}>
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
