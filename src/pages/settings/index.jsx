import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { geminiService } from "../../config/gemini";

import { setApiKey } from "../../redux/chat-actions";

export const Settings = () => {
  const dispatch = useDispatch();
  const { apiKey } = useSelector((state) => state.chatReducer);

  const [apiKeyInMemory, setApiKeyInMemory] = useState(apiKey);

  const handleSaveApiKey = () => {
    dispatch(setApiKey(apiKeyInMemory));
    geminiService.initialize(apiKeyInMemory);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">Settings</Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          textAlign="center"
          mb={2}
        >
          Enter your API key below to connect your AI workflow with external
          services.
        </Typography>
        <TextField
          type="password"
          value={apiKeyInMemory}
          onChange={(e) => setApiKeyInMemory(e.target.value)}
          label="API Key"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSaveApiKey}>
          Save API Key
        </Button>
      </Box>
    </Box>
  );
};
