import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { orange, teal } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Status = () => {
  return (
    <Box component={"section"} className="status">
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <div>
              <span style={{ paddingRight: "2rem" }} className="projects">
                <Badge
                  badgeContent={50}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: orange[800],
                    },
                  }}
                >
                  <Typography color={orange[800]}>All Projects</Typography>
                </Badge>
              </span>
              <span style={{ paddingRight: "2rem" }}>
                <Badge
                  badgeContent={20}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#999999",
                    },
                  }}
                >
                  <Typography color={"textSecondary"}>In Progress</Typography>
                </Badge>
              </span>
              <span style={{ paddingRight: "2rem" }}>
                <Badge
                  badgeContent={30}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "#999999",
                    },
                  }}
                >
                  <Typography color={"textSecondary"}>Done</Typography>
                </Badge>
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={5}>
            <div style={{ display: "flex" }}>
              <span style={{ paddingRight: "1rem" }}>
                <MenuIcon color="action" />
              </span>
              <span style={{ paddingRight: "1rem" }}>
                <DashboardIcon color="action" />
              </span>
              <Typography color={"textSecondary"} sx={{ pr: 1.5 }}>
                Filter
              </Typography>
              <span style={{ paddingRight: "1rem" }}>
                <SearchIcon color="action" />
              </span>
              <div style={{ marginTop: "-.5rem" }}>
                <Button
                  variant="contained"
                  className="status-btn"
                  sx={{
                    textTransform: "inherit",
                    backgroundColor: teal["A700"],
                  }}
                  startIcon={<AddIcon />}
                >
                  New Projects
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Status;
