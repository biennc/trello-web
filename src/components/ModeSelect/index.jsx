import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme
} from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl size='small'>
      <InputLabel id='label-select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}>
        <MenuItem value='Light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WbSunnyOutlinedIcon />
          </Box>
        </MenuItem>
        <MenuItem value='Dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon />
          </Box>
        </MenuItem>
        <MenuItem value='System'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Brightness4OutlinedIcon />
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
