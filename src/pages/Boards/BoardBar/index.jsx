import { Avatar, AvatarGroup, Box, Button, Chip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const BoardBar = () => {
  const MENU_STYLES = {
    color: 'white',
    backgroundColor: '#1976b2',
    border: 'none',
    px: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': { color: 'white' },
    '&:hover': {
      bgcolor: 'primary.50'
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        px: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1976b2',
        height: (theme) => theme.trello.boardBarHeight
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label='Dashboard'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label='Filter'
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
