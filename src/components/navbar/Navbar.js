import React, { useState, useEffect } from 'react'
import { 
    AppBar, 
    Box, 
    Button, 
    ButtonBase, 
    Container, 
    Drawer, 
    IconButton, 
    Toolbar, 
    Typography, 
    Link, 
    MenuItem, 
    Avatar, 
    InputBase,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import { menu } from './menuItem'
import { Link as RouterLink } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import User from '../../assets/user.png'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #cccccc',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'action',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Navbar = () => {

    const navigate = useNavigate()
    const [navState, setNavState] = useState({
        mobile: false,
        isOpen: false 
    })
    const { mobile, isOpen} = navState
    const [navColor, setNavColor] = useState(false)
    const changeNav = () => {
        return window.scrollY >= 100
        ? setNavColor(true)
        : setNavColor(false)
    }

    useEffect(() => {
        const responsive = () => {
            return window.innerWidth < 900
            ? setNavState(prevState => ({
                ...prevState,
                mobile: true
            }))
            : setNavState(prevState => ({
                ...prevState,
                mobile: false
            }))
        }
        responsive()
        window.addEventListener('resize', () => responsive())

        return () => {
            window.removeEventListener('resize', () => responsive())
        }
    }, [])

    const desktopView = () => {
        window.addEventListener('scroll', changeNav)
        return (
            <Toolbar>
                <Container className='menu'>
                    <Box component='div' sx={{ display: 'flex'}}>
                        <Typography variant='p' className='logo' onClick={() => navigate('/')}>
                            pro:<span style={{ color: '#ef6c00'}}>manage</span>
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon color='action' />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Type to find something here..."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        {/* </TextField> */}
                    </Box>
                    <Box component={'div'} style={{ display: 'flex'}}>
                    {
                        menu.map(({name, path}) => (
                            <ButtonBase
                            className= {'menu-links'}
                            {...{
                                key: name,
                                to: path,
                                component: RouterLink
                            }}
                            disableRipple={true}
                            disableTouchRipple={true}
                            focusRipple={true}
                            >
                                {name}
                            </ButtonBase>
                        ))
                    }
                    <Box component={'div'} className='nav-icon'>
                    <span style={{ paddingRight: '1rem', paddingTop: '1rem'}}>
                        <NotificationsNoneIcon color='action' />
                    </span>
                    <span style={{ paddingRight: '1rem', paddingTop: '1rem'}}>
                        <Avatar alt='user' src={User} sx={{ width: 24, height: 24 }} />
                    </span>
                        <Typography variant='body2' color={'black'} sx={{pt: 2, fontWeight: 'bold'}}>Ahmad Zaky</Typography>
                    </Box>
                    </Box>
                </Container>
            </Toolbar>
        )
    }

    const mobileView = () => {
        window.addEventListener('scroll', changeNav)
        const menuIconOpen = () => setNavState(prevState => ({
            ...prevState,
            isOpen: true
        }))
        const menuIconClose = () => setNavState(prevState => ({
            ...prevState,
            isOpen: false
        }))
        return (
            <Toolbar>
                <Container className='menu'>
                    <IconButton
                    onClick={menuIconOpen}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Drawer
                    {...{
                        anchor: 'left',
                        open: isOpen,
                        onClose: menuIconClose
                    }}
                    className='drawer'
                    >
                    <div>{drawerLinks()}</div>
                    </Drawer>
                    <Button
                    variant='contained'
                    size='small'
                    sx={{ textTransform: 'inherit'}}
                    >
                    Sign In <LoginIcon />
                    </Button>
                    <Box component={'div'}>
                        <Typography variant='h6' color={ navColor ? 'black' : 'white'} sx={{ fontWeight: 'bold'}}>Digimart</Typography>
                    </Box>
                </Container>
            </Toolbar>
        )
    }
    const drawerLinks = () => {
        return menu.map(({name, path}) => (
            <Link
            {...{
                to: path,
                key: name,
                component: RouterLink
            }}
            style={{
                textDecoration: 'none',
                color: 'black'
            }}
            >
            <MenuItem>{name}</MenuItem>
            </Link>
        ))
    }
  return (
    <AppBar className={'navbar'}>{mobile ? mobileView() : desktopView()}</AppBar>
  )
}

export default Navbar