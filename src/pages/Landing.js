import { Avatar, Box, Container, Grid, Typography, AvatarGroup, Divider } from "@mui/material"
import Navbar from "../components/navbar/Navbar"
import Dipa from '../assets/wood.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { team } from "../components/team";
import Status from "../components/landing/Status";
import SectionCards from "../components/landing/SectionCards";
import Chat from "../components/landing/Chat";

const Landing = () => {
  return (
    <>
        <Navbar />
        {/* Landing Page Header */}
        <Box component='section' className="landing-header">
        <Box component={'div'}>
        <Container>
        <Grid container>
        <Grid item xs={12} md={4}>
        <div style={{ display: "flex"}}>
            <Avatar alt="banner" src={Dipa} sx={{ mr: 4}} />
            <div>
            <div style={{ display: 'flex'}}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', pr: 1}}>Dipa Inhouse</Typography> 
            <KeyboardArrowDownIcon />
            </div>
            <Typography variant="body2" color={'textSecondary'}>Start managing your task with the team</Typography>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={2} >
        <div style={{ display: "flex"}}>
        <Typography variant="body2" sx={{ pt: 1, pr: 1}}>Team</Typography>
        <AvatarGroup max={4}>
        {
            team.map(({img, title}) => (
                <Avatar src={img} alt={title}  />
            ))
        }
        </AvatarGroup>
        </div>
        </Grid>
        <Grid item xs={12} md={4}>
        <div className="landing-box">
            <Box component={'section'} className='landing-header-box' sx={{ mr: 1}}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '.5rem'}}>
                <ChatBubbleOutlineIcon color="action" />
                <Typography variant="body2" color={'textSecondary'} align='center' sx={{ pl: 1}}>Live discussion</Typography>
            </div>
            </Box>
           <Box component={'section'} className='landing-header-box'>
           <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '.5rem'}}>
                <CalendarMonthIcon color="action" />
                <Typography variant="body2" color={'textSecondary'} align='center' sx={{ pt: .5, pl: 1}}>Meet Schedule</Typography>
           </div>
           </Box>
        </div>
        </Grid>
        </Grid>
        </Container>
        </Box>
        </Box>
        <Divider />

        {/* Landing Page Body */}
        <Box component={'section'} className='landing-body'>
        <Container>
        <Box component={'section'} className='card-body'>
        <div className='left-body'>
        <Status />
        <SectionCards />
        </div>
        <div className="right-body">
           <Chat />
        </div>
        </Box>
        </Container>
        </Box>
        
    </>
  )
}

export default Landing