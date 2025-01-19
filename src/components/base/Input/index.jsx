import { TextField } from '@mui/material';

const Input = ({ id, label, type, value, onChange, ...props }) => {
  return (
    <TextField
      margin="normal" required fullWidth
      id={id} label={label} type={type}
      value={value} onChange={onChange}
      sx={{
        "& .MuiInputLabel-root": { color: "#D16F9A" },
        "& .MuiInputLabel-root.Mui-focused": { color: "#D16F9A" },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#D16F9A" },
          "&:hover fieldset": { borderColor: "#D16F9A" },
          "&.Mui-focused fieldset": { borderColor: "#D16F9A" },
        },
        "& .MuiInputBase-input": { color: "#D16F9A" },
      }}
      {...props}
    />
  );
};

export default Input;
