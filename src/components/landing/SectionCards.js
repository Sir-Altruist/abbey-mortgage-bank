import { Card, Grid, Box, Container, Typography, CircularProgress, Divider, Button, AvatarGroup, Avatar } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import User1 from '../../assets/user.png'
import User2 from '../../assets/img1.png'
import User3 from '../../assets/img3.png'
import User4 from '../../assets/img2.png'
import User5 from '../../assets/img4.png'
import User6 from '../../assets/img5.png'
import User7 from '../../assets/img6.png'
import { orange, teal, blue } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SectionCards = () => {
  return (
      <Box component={'section'} className='section-card'>
      <Container>
      <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '2px', color: 'orange'}}>50%</Typography>
                <CircularProgress variant="determinate" value={50} sx={{ color: 'orange'}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                    <StarIcon fontSize='small' sx={{ color: 'orange'}} />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>Hotel Management App</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Theresa Webb</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" sx={{ color: orange[800], fontWeight: 'bold'}}>High</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User1} alt='user' />
                    <Avatar src={User2} alt='user' />
                    <Avatar src={User3} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '2px', color: orange[800]}}>25%</Typography>
                <CircularProgress variant="determinate" value={25} sx={{ color: orange[800]}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                    <StarBorderIcon fontSize='small' color="action" />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>Remote Car IoT</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Dianne Russell</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" color={teal['A700']} sx={{ fontWeight: 'bold'}}>Low</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User4} alt='user' />
                    <Avatar src={User5} alt='user' />
                    <Avatar src={User6} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '3px'}} color={blue[500]}>75%</Typography>
                <CircularProgress variant="determinate" value={75} sx={{ color: blue[500]}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                    <StarBorderIcon fontSize='small' color="action" />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>Analytics Dashboard</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Courtney Henry</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" sx={{ color: 'orange', fontWeight: 'bold'}}>Medium</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User7} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '3rem', marginBottom: "5rem"}}>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '2px', color: orange[800]}}>25%</Typography>
                <CircularProgress variant="determinate" value={25} sx={{ color: orange[800]}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                <StarBorderIcon fontSize='small' color="action" />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>POS Saas for Retailer</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Jane Cooper</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" sx={{ color: teal['A700'], fontWeight: 'bold'}}>Low</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User1} alt='user' />
                    <Avatar src={User2} alt='user' />
                    <Avatar src={User3} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '3px', color: teal['A700']}}>85%</Typography>
                <CircularProgress variant="determinate" value={85} sx={{ color: teal['A700']}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                <StarIcon fontSize='small' sx={{ color: 'orange'}} />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>Dell Computer Monitor</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Cody Fisher</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" sx={{ color: orange[800], fontWeight: 'bold'}}>High</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User4} alt='user' />
                    <Avatar src={User5} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
          <Grid item xs={6} md={4}>
              <Card sx={{ borderRadius: "5%"}}>
              <Container>
              <section style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}}>
              <div style={{position: 'relative'}}>
                <Typography variant="body2" sx={{position: 'absolute', top: '10px', left: '2px', color: 'orange'}}>50%</Typography>
                <CircularProgress variant="determinate" value={50} sx={{ color: 'orange'}} />
                </div>
                <div>
                <span style={{ paddingRight: '1rem'}}>
                <StarBorderIcon fontSize='small' color="action" />
                </span>
                <span>
                    <MoreHorizIcon color="action" />
                </span>
                </div>
              </section>
              <section style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold'}}>E-Ticket for Balsics EO</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", color: '#cccccc'}}>Robert Fox</Typography>
              </section>
              <Divider sx={{ width: '100%'}} />
              <section style={{ paddingTop: '3rem', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="contained" className='card-btn' sx={{ background: '#ffffff'}}>
                <Typography variant="body2" sx={{ color: teal['A700'], fontWeight: 'bold'}}>Low</Typography>
                </Button>
                <AvatarGroup>
                    <Avatar src={User1} alt='user' />
                    <Avatar src={User2} alt='user' />
                    <Avatar src={User3} alt='user' />
                </AvatarGroup>
              </section>
              </Container>
              </Card>
          </Grid>
      </Grid>
      </Container>
      </Box>
  )
}

export default SectionCards