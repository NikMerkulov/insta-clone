import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import CardList from "./components/CardList/CardList"
import * as api from "./utils/api/api"
import { useEffect, useState } from "react"
import { Box } from "@mui/system"

const App = () => {
  const data = {
    email: '10@m.ru',
    password: '123456789'
  }
  const [myUserId, setMyUserId] = useState('')
  const [userProfile, setUserProfile] = useState([])

  useEffect(() => {
    handleLogin(data)
    if (myUserId !== '')
      handleGetUserProfile(myUserId)
  }, [])

  const handleLogin = async ({email, password}) => {
    const myUserId = await api.login({email, password})
    setMyUserId(myUserId)
  }

  const handleGetUserProfile = async userId => {
    const userProfile = await api.getUserProfile(userId)
    setUserProfile(userProfile)
  }
  console.log(myUserId, userProfile)
  return <Container maxWidth='xs' disableGutters>
    <Box sx={{ paddingX: '8px' }}>
      <Header id={userProfile._id}/>
      <Profile avatar={userProfile.avatar} name={userProfile.name} />
    </Box>
    <CardList cards={userProfile.cards} />
  </Container>
}

export default App
