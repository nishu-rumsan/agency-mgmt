import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { useProjectContext } from '@contexts/projects';
import moment from 'moment';

const MoreInfoCard = (props) => {
  const { singleProject, isRahatResponseLive } = useProjectContext();
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between" alignItems="center" spacing={12}>
          <Grid container direction="column" justifyContent="center" alignItems="flex-start">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {singleProject?.projectManagerName}
            </Typography>
            <Typography variant="body2">Project Manager </Typography>
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={12}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {moment(singleProject?.projectCreatedAt).format('DD MMM, YYYY')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="body2">Created At</Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between" alignItems="center" spacing={12}>
          <Grid container direction="column" justifyContent="center" alignItems="flex-start">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {singleProject?.location}
            </Typography>
            <Typography variant="body2">Location</Typography>
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Chip
              variant="h5"
              color={isRahatResponseLive ? 'success' : 'error'}
              sx={{
                fontWeight: 600,
                padding: 2,
                // backgroundColor: isRahatResponseLive ? 'success.main' : 'error.main',
                // color: 'white',
              }}
              label={isRahatResponseLive ? 'Response Activated' : 'Response Not Triggered'}
            />

            <Typography variant="body2">Response Trigger Status</Typography>
          </Grid>
        </Stack>

        <Stack sx={{ p: 2 }}>
          <Typography variant="body1">{'Cash distribution to five more single women'}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

MoreInfoCard.propTypes = {};

export default MoreInfoCard;
