import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: 'white', color: 'black' }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={Logo} alt="Menu-logo" />
            </IconButton>

            <Box sx={{ display: "flex", gap: "30px"}}>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">Home</Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">Service</Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">Feature</Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">Product</Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">Testimonial</Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography sx={{color:"black"}} variant="body1">FAQ</Typography>
              </Link>
            </Box>

            <Box>
              <Button sx={{ color: "#4CAF4F" }}>Login</Button>
              <Button variant="contained" color="success">
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
