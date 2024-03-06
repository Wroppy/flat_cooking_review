import { Box } from "@mui/material";
import styles from "./page.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/dark";
import ReviewForm from "./ReviewForm";


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.main}>
        <ReviewForm/>
      </Box>
    </ThemeProvider>
  );
}
