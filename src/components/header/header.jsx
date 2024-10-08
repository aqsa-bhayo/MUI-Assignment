import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <>

      <AppBar sx={{ backgroundColor: "#f4f7fa", color: 'black', padding:"0px 150px" }} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
          >
            <img  src={Logo} alt="Menu-logo" style={{ marginTop: '30px' }} />
          </IconButton>

          <Box sx={{ display: "flex", gap: "30px", marginTop:"40px"  }}>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">Home</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">Service</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">Feature</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">Product</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">Testimonial</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography sx={{ color: "black" }} variant="body1">FAQ</Typography>
            </Link>
          </Box>

          <Box sx={{ marginTop:"40px"}}>
            <Button sx={{ color: "#4CAF4F" }}>Login</Button>
            <Button variant="contained" sx={{backgroundColor:"#4caf4f", textAlign:"center"}}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
