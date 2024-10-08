import React from 'react'
import heroImg from '../../assets/hero-img.png'
import { Box, Button, Grid, Typography } from '@mui/material'

const HeroSection = () => {
  return (
    <>
         <Box sx={{ backgroundColor: '#f4f7fa', py: 10, px:20 }}>
      <Grid container alignItems="center" justifyContent="space-around" spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 600, mb: 2, color:"#4d4d4d", fontSize:"64px"}}>
              Lessons and insights <br />
              <span style={{ color:"#4caf4f" }}>from 8 years</span>
            </Typography>
            <Typography variant="body1"  sx={{ mb: 4, color: "#717171", fontSize:"16px"}}>
              Where to grow your business as a photographer: site or social media?
            </Typography>
            <Button variant="contained" sx={{backgroundColor:"#4caf4f"}} size="large">
              Register
            </Button>
          </Box>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', marginTop:"50px" }}>
          <img src={heroImg} alt="Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default HeroSection
