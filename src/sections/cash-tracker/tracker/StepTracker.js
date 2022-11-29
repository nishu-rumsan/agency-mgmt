import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Step,
  Stack,
  Stepper,
  StepLabel,
  StepConnector as MUIStepConnector,
  Grid,
  Typography,
} from '@mui/material';
// components
import Iconify from '@components/iconify';

// ----------------------------------------------------------------------

const StepConnector = styled(MUIStepConnector)(({ theme }) => ({
  top: 10,
  left: 'calc(-50% + 20px)',
  right: 'calc(50% + 20px)',
  '& .MuiStepConnector-line': {
    borderTopWidth: 2,
    borderColor: theme.palette.divider,
  },
  '&.Mui-active, &.Mui-completed': {
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

// ----------------------------------------------------------------------

CheckoutSteps.propTypes = {
  sx: PropTypes.object,
  activeStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string),
};

export default function CheckoutSteps({ steps, activeStep, sx, ...other }) {
  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={<StepConnector />} sx={{ mb: 5, ...sx }} {...other}>
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel
            StepIconComponent={StepIcon}
            sx={{
              '& .MuiStepLabel-label': {
                typography: 'subtitle2',
              },
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={12}>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Typography fontWeight={700} variant="caption">
                  {step?.label}
                </Typography>

                <Typography variant="caption">Budget: {step?.budget} </Typography>
                {step.beneficiaries && <Typography variant="caption">Beneficiaries: {step.beneficiaries} </Typography>}

                <Typography variant="caption">Balance: {step?.balance} </Typography>
              </Grid>
            </Stack>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

// ----------------------------------------------------------------------

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

function StepIcon({ active, completed }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 24,
        height: 24,
        color: 'text.disabled',
        ...(active && {
          color: 'primary.main',
        }),
      }}
    >
      {completed ? (
        <Iconify icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
      ) : (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
        />
      )}
    </Stack>
  );
}
