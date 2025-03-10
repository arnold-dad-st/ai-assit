import { Card, CardContent, Typography } from "@mui/material";
import styles from "./card.module.css";

export const PromptCard = ({ onSelect, text, icon }) => {
  return (
    <Card
      className={styles.card}
      onClick={() => onSelect(text)}
      variant="outlined"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <Typography variant="body1">{text}</Typography>
        <span className={styles["card-icon"]}>{icon}</span>
      </CardContent>
    </Card>
  );
};
