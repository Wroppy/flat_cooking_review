"use client";
import {
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import styles from "./SelectBox.module.scss";

export default function SelectBox(props) {
  const labelId = `select-${props.labelHeading.replaceAll(" ", "-")}-label`;
  return (
    <Box className={styles.FormSelect}>
      <Typography>{props.heading}</Typography>
      <Box minWidth={150}>
        <FormControl fullWidth>
          <InputLabel size="small" id={labelId}>
            {props.labelHeading}
          </InputLabel>
          <Select
            value={props.value ?? ""}
            size="small"
            labelId={labelId}
            onChange={(e) => {
              props.setValue(e.target.value);
            }}
          >
            {props.values.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
