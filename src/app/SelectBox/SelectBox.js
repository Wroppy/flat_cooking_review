import {
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import styles from "./SelectBox.module.scss";

export default function SelectBox({ value, values, setValue, labelHeading, heading }) {
  const labelId = `select-${labelHeading.replaceAll(" ", "-")}-label`;

  return (
    <Box className={styles.FormSelect}>
      <Typography>{heading}</Typography>
      <Box minWidth={150}>
        <FormControl fullWidth>
          <InputLabel size="small" id={labelId}>
            {labelHeading}
          </InputLabel>
          <Select size="small"  labelId={labelId}>
            {values.map((item, index) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
