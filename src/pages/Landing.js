import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  AvatarGroup,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Dipa from "../assets/wood.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { team } from "../components/team";
import Status from "../components/landing/Status";
import SectionCards from "../components/landing/SectionCards";
import Chat from "../components/landing/Chat";
import StatusMobile from "../components/landing/StatusMobile";
import SectionMobile from "../components/landing/SectionMobile";

const Landing = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const responsive = () => {
      return window.innerWidth < 900 ? setMobile(true) : setMobile(false);
    };
    responsive();
    window.addEventListener("resize", () => responsive());

    return () => {
      window.removeEventListener("resize", () => responsive());
    };
  }, []);

  const desktopView = () => {
    return (
      <>
        <Navbar />
        {/* Landing Page Header */}
        <Box component="section" className="landing-header">
          <Box component={"div"}>
            <Container>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <div style={{ display: "flex" }}>
                    <Avatar alt="banner" src={Dipa} sx={{ mr: 4 }} />
                    <div>
                      <div style={{ display: "flex" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", pr: 1 }}
                        >
                          Dipa Inhouse
                        </Typography>
                        <KeyboardArrowDownIcon />
                      </div>
                      <Typography variant="body2" color={"textSecondary"}>
                        Start managing your task with the team
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}></Grid>
                <Grid item xs={12} md={2}>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2" sx={{ pt: 1, pr: 1 }}>
                      Team
                    </Typography>
                    <AvatarGroup max={4}>
                      {team.map(({ img, title }) => (
                        <Avatar src={img} alt={title} key={title} />
                      ))}
                    </AvatarGroup>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="landing-box">
                    <div style={{ marginRight: "1rem" }}>
                      <TextField
                        id="input-with-icon-textfield"
                        placeholder="Live Discussion"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <ChatBubbleOutlineIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="input-with-icon-textfield"
                        placeholder="Meet Schedule"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonthIcon color="action" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Divider />

        {/* Landing Page Body */}
        <Box component={"section"} className="landing-body">
          <Container>
            <Box component={"section"} className="card-body">
              <div className="left-body">
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
    );
  };

  const mobileView = () => {
    return (
      <>
        <Navbar />
        {/* Landing Mobile */}
        <Box component={"section"}>
          <Container>
            <Box
              component={"div"}
              style={{ paddingTop: "6rem", paddingBottom: "3rem" }}
            >
              <div className="dipa">
                <div style={{ display: "flex" }}>
                  <Avatar alt="banner" src={Dipa} sx={{ mr: 3 }} />
                  <div>
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", pr: 1 }}
                      >
                        Dipa Inhouse
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </div>
                    <Typography variant="body2" color={"textSecondary"}>
                      Start managing your task with the team
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="team">
                <Typography variant="h6" sx={{ pt: 1, pr: 3 }}>
                  Team
                </Typography>
                <AvatarGroup max={4}>
                  {team.map(({ img, title }) => (
                    <Avatar src={img} alt={title} key={title} />
                  ))}
                </AvatarGroup>
              </div>
              <div className="landing-box">
                <div style={{ marginRight: ".5rem" }}>
                  <TextField
                    id="input-with-icon-textfield"
                    placeholder="Live Discussion"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ChatBubbleOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="input-with-icon-textfield"
                    placeholder="Meet Schedule"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
            </Box>
          </Container>
          {/* Landing Page mobile */}
          <Box component={"section"} className="landing-body">
            <Container>
              <StatusMobile />
              <SectionMobile />
            </Container>
          </Box>
        </Box>
      </>
    );
  };
  return <>{mobile ? mobileView() : desktopView()}</>;
};

export default Landing;
