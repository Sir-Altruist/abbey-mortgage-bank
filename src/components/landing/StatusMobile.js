import { Box, Button, Container, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { orange, teal } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const StatusMobile = () => {
  return (
    <Box component={"section"} sx={{ marginTop: "3rem", paddingTop: "3rem" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <MenuIcon color="action" />
          </span>
          <span>
            <DashboardIcon color="action" />
          </span>
          <Typography color={"textSecondary"} sx={{ pr: 1.5 }}>
            Filter
          </Typography>
          <span>
            <SearchIcon color="action" />
          </span>
          <div>
            <Button
              variant="contained"
              className="status-btn"
              sx={{ textTransform: "inherit", backgroundColor: teal["A700"] }}
              startIcon={<AddIcon />}
            >
              New Projects
            </Button>
          </div>
        </div>
        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
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
          <span>
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
          <span>
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
      </Container>
    </Box>
  );
};

export default StatusMobile;
