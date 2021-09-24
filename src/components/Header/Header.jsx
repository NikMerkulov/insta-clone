import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AddBoxOutlined, Menu } from '@mui/icons-material'

const Header = ({ id }) => {
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    username: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '700',
    },
  }
  return <Box sx={styles.wrapper}>
    <Typography sx={styles.username}>{id}</Typography>
    <Box>
      <IconButton><AddBoxOutlined /></IconButton>
      <IconButton><Menu /></IconButton>
    </Box>
  </Box>
}

export default Header