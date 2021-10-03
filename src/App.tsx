import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { getAllLaunches } from './services/spaceXApi';
import { LaunchDataEntryProps } from './services/spaceXApi.types';
import { DataTable } from './component/DataTable';


const App = () => {
  const [data, setData] = useState<LaunchDataEntryProps[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<any | unknown>();
  
  useEffect(() => {
    setLoading(true);
    const response = async () => {
      try {
        const res = await getAllLaunches();
        setData(res);
        setLoading(false);
      } catch (e) {
        setApiError(e);
        setLoading(false);
      }
    };
    response();
  }, []);

  if (loading) {
    return <div>loading..</div>
  }
  if (apiError) {
    return <div>Couldn't load api</div>
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" >
          🚀 SpaceX App
        </Typography>
      </Toolbar>
    </AppBar>
    <DataTable data={data} />
  </Box>
  );
};

export default App;
