import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material"
import { useRouter } from "next/router"
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { tabPage } from "@/utils/constants";
const Navigator = () => {
  const router = useRouter()
  const icons = [
    {
      title: 'about', onClick: () => {
        router.push({ pathname: '/about' })
      },
      icon: <RestoreIcon />,
    },
    {
      title: 'search', onClick: () => {
        router.push({ pathname: '/search' })
      },
      icon: <FavoriteIcon />,
    }, {
      title: 'more', onClick: () => {
        router.push({ pathname: '/more' })
      },
      icon: <LocationOnIcon />,
    },
  ]
  return (
    <Paper sx={{ width: '100%' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={tabPage.indexOf(router.pathname)}
        style={{ width: '100%' }}
      >
        {icons.map(v => {
          return (
            <BottomNavigationAction label={v.title} key={v.title} onClick={v.onClick} icon={v.icon} >
            </BottomNavigationAction>
          )
        })}
      </BottomNavigation>
    </Paper>
  )
}

export default Navigator