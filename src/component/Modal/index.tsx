import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import { prettyDate } from '../../utils/date';
import { ModalProps } from './types';
import { styleXS } from './styles';


export const BasicModal = ({ data, modalOpen, handleToggleModal }: ModalProps) => {
  const {
    mission_name,
    details = "",
    launch_date_utc = "",
    launch_failure_details,
    launch_success = undefined,
    rocket,
    links
  } = data;
  
  const handleModalClose = () => handleToggleModal(false);
  
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleXS}>
          <Stack direction="row" spacing={2}>
            <Avatar alt="logo" src={links?.mission_patch_small} /> 
            <Typography variant="h6" component="h2" gutterBottom>{rocket?.rocket_name}</Typography>
          </Stack>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>Rocket Type</strong>: {rocket?.rocket_type}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>Launch Name</strong>: {mission_name}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>Launch Date</strong>: {prettyDate(launch_date_utc)}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>Launch status</strong>: {launch_success ? '✅ Success' : '🚫 Failure'}
          </Typography>
          {!launch_success && 
          <Typography variant="body1" component="p" gutterBottom>
            <strong>Failure Reason</strong>: {launch_failure_details?.reason}
          </Typography>
          }
          <Typography variant="body1" component="p">
            <strong>Details</strong>
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {details ?? 'No description'}
          </Typography>   
          <DialogActions>
            <Button variant="outlined" onClick={handleModalClose}>Close</Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
