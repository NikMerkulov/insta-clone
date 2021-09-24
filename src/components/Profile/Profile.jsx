import { Avatar, Button, Stack, Typography } from "@mui/material"
import { Box } from '@mui/system'

const Profile = ({ avatar, name }) => {
  const styles = {
    number: {
      fontWeight: '700',
      fontSize: '15px',
      lineHeight: '1rem'
    },
    text: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1rem'
    },
    name: {
      fontWeight: '700',
      fontSize: '20px',
      marginTop: '12px',
      marginBottom: '4px',
      lineHeight: '1rem'
    }
  }

  return <>
    <Box sx={{ display: 'flex' }}>
      <Avatar src={avatar} alt='Profile Picture' sx={{ width: '80px', height: '80px' }}/>
      <Stack direction='row' spacing={2} sx={{ marginLeft: '24px', alignItems: 'center', textAlign: 'center' }}>
        <Box>
          <Typography sx={styles.number}>18</Typography>
          <Typography sx={styles.text}>Публикации</Typography>
        </Box>
        <Box>
          <Typography sx={styles.number}>102</Typography>
          <Typography sx={styles.text}>Подписчики</Typography>
        </Box>
        <Box>
          <Typography sx={styles.number}>237</Typography>
          <Typography sx={styles.text}>Подписки</Typography>
        </Box>
      </Stack>
    </Box>
    <Typography sx={styles.name}>{name}</Typography>
    <Typography>Москва</Typography>
    <Button 
      fullWidth
      variant='outlined'
      sx={{ marginTop: '16px', height: '32px' }}

    >Редактировать профиль</Button>
  </>
}

export default Profile