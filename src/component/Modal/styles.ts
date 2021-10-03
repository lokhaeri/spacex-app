import { SxProps } from '@mui/system';
import { Theme } from "@mui/material/styles";

export const styleXS = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fefefe',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
} as SxProps<Theme>;