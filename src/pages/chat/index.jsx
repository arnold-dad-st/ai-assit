import { useState } from "react";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";

import ExploreIcon from "@mui/icons-material/Explore";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";

import { PromptCard } from "../../components/card";

const prompts = [
  {
    id: 1,
    text: "Suggest beautiful places to see on an upcoming road trip",
    icon: <ExploreIcon />,
  },
  {
    id: 2,
    text: "Briefly summarize this concept: urban planning",
    icon: <LightbulbIcon />,
  },
  {
    id: 3,
    text: "Brainstorm team bonding activities for our work retreat",
    icon: <ChatIcon />,
  },
  {
    id: 4,
    text: "Tell me help React js and React native",
    icon: <CodeIcon />,
  },
];

export const Chat = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {};

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 500, color: "gray" }}>
          Hello, Dev
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          How can I help you today?
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 2,
          }}
        >
          {prompts.map(({ text, icon, id }) => (
            <PromptCard
              key={id}
              text={text}
              icon={icon}
              onClick={handleClick}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f0f4f9",
            borderRadius: 50,
            p: 1,
          }}
        >
          <TextField
            fullWidth
            multiline
            variant="outlined"
            placeholder="Enter a prompt here"
            onChange={handleChange}
            value={message}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
            sx={{ border: "none", outline: "none", paddingInline: 2 }}
          />
          <IconButton onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
