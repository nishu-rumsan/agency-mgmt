import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Typography, Stack, Box, Tooltip } from '@mui/material';
// utils
import { fCurrency, numberWithCommas } from '@utils/formatNumber';
// components
import Iconify from '@components/iconify';

// ----------------------------------------------------------------------

SummaryCard.propTypes = {
  sx: PropTypes.object,
  chart: PropTypes.object,
  color: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  showTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
};

export default function SummaryCard({
  title,
  total,
  icon,
  subtitle,
  color = 'primary',
  sx,
  showTooltip = true,
  tooltipText,
  ...other
}) {
  return (
    <Card
      sx={{
        width: 1,
        boxShadow: 0,
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Iconify
        icon={icon}
        sx={{
          p: 1.5,
          top: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          position: 'absolute',
          //color: 'grey',
          color: (theme) => theme.palette[color].dark,
          //bgcolor: (theme) => theme.palette[color].dark,
        }}
      />
      <Tooltip
        title={showTooltip ? (tooltipText ? tooltipText : 'रु ' + numberWithCommas(total)) : numberWithCommas(total)}
      >
        <Stack spacing={1} sx={{ p: 3 }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h3">{fCurrency(total)}</Typography>
          <Box component="span" sx={{ opacity: 0.72, typography: 'body2' }}>
            {subtitle}
          </Box>
        </Stack>
      </Tooltip>
    </Card>
  );
}
