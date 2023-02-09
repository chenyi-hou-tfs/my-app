import { tabPage, titleMap } from "@/utils/constants"
import { AppBar, Avatar, Button, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { useRouter } from "next/router"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useContext, useState } from "react";
import { AppContext } from "@/pages/_app";
import MenuIcon from '@mui/icons-material/Menu';

const NavigatorBar = (props) => {
  const router = useRouter()
  const c = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const _open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    c.setUserInfo({
      name: '',
      id: -1
    })
    handleClose()
  }
  const title = typeof titleMap[router.pathname] === 'function' ? titleMap[router.pathname](router) : titleMap[router.pathname]
  return (
    <div style={{ display: 'flex', width: '100%', }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => {
              if (props.isTab) {
                setOpen(true)
              } else {
                router.back()
              }
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {!props.isTab ? <ArrowBackIosIcon /> : <MenuIcon />}

          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, overflow: 'hidden', whiteSpace: 'nowrap', overflow: 'hidden', mr: 2 }} style={{}}>
            {title}
          </Typography>
          {c.userInfo?.name ?
            <Avatar onClick={handleClick}>{c.userInfo?.name[0]}</Avatar> :
            <Button onClick={() => {
              setTimeout(() => {
                c.setUserInfo({
                  name: 'user2',
                  id: 2
                })
              }, 3000)
            }} color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(!open)}
      >
        <div style={{ width: '100px' }}>
        </div>
      </Drawer>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={_open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default NavigatorBar