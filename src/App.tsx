import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { getAllLaunches } from './services/spaceXApi';
import { LaunchDataEntryProps } from './services/spaceXApi.types';
import { DataTable } from './component/DataTable';
import { useSelector } from 'react-redux';
import { useAppActions } from './store/actions';
import { RootState } from './store/reducer';


const App = () => {
  const { loading, apiError, data } = useSelector((state: RootState) => state);
  const { setLoading, setApiError, setData } = useAppActions();

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
          <span tabIndex={0}>🚀 SpaceX App</span>
        </Typography>
      </Toolbar>
    </AppBar>
    <DataTable data={data as LaunchDataEntryProps[] | []} />
  </Box>
  );
};

export default App;
