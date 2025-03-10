import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" color="#FFF" boxShadow="none">
      <Toolbar>
        <Typography flexGrow="1" variant="h6">
          AI Assistant
        </Typography>

        <Avatar />
      </Toolbar>
    </AppBar>
  );
};
