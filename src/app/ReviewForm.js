"use client";

import {
  Button,
  Paper,
  Box,
  Typography,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./ReviewForm.module.scss";
import SelectBox from "./SelectBox/SelectBox";

export default function ReviewForm() {
  const names = ["Perry", "Briony", "Liam", "Nick", "Weyman"].sort();

  const [userName, setUserName] = useState("Perry");
  const [chefName, setChefName] = useState("");
  const [chefs, setChefs] = useState(names);
  const [rating, setRating] = useState(5);

  // Removes the user's name from the cooks to stop self-voting
  useEffect(() => {
    // Stops empty select boxes
    if (!userName) return;

    // Removes the name from the list
    let index = names.indexOf(userName);
    names.splice(index, 1)
    setChefs(names);

    // Checks if the cook's value is the new user
    if (userName === chefName) {
      setChefName("");
    }
  }, [userName]);

  return (
    <Paper elevation={1} className={styles.ReviewForm}>
      <Box className={styles.ReviewFormHeader}>Review Meal</Box>
      <form className={styles.Form}>
        <Box>
          <SelectBox
            values={names}
            value={userName}
            setValue={setUserName}
            labelHeading="Name"
            heading="What is your name?"
          />
          <SelectBox
            values={chefs}
            value={chefName}
            setValue={setChefName}
            labelHeading="Chef's Name"
            heading="What is the chef's name?"
          />

          <Box className={styles.ReviewFormSlider}>
            <Typography>Rate your meal:</Typography>
            <Box className={styles.ReviewFormSliderBox}>
              <Typography sx={{ height: "100%", marginRight: "0.2rem" }}>
                0
              </Typography>
              <Box width={200}>
                <Slider
                  // size="small"
                  valueLabelDisplay="on"
                  min={0}
                  max={10}
                  step={1}
                  value={rating}
                  onChange={(e, value) => setRating(value)}
                />
              </Box>

              <Typography sx={{ height: "100%", marginLeft: "0.2rem" }}>
                10
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.ReviewFormFooter}>
          <Button variant="contained">Submit</Button>{" "}
        </Box>
      </form>
    </Paper>
  );
}
