import SummaryCard from '@components/SummaryCard';
import { SPACING } from '@config';
import { Grid } from '@mui/material';
import { DashboardService } from '@services/dashboard';
import { getFileContent } from '@services/github';
import { useCallback, useEffect, useState } from 'react';

const Summaries = () => {
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(0);
  const [otherSummaries, setOtherSummaries] = useState({
    totalCollected: 0,
    totalValidated: 0,
  });

  const fetchSummary = async () => {
    const summaries = await DashboardService.getBeneficiarySummary();
    const totalBeneficiariesRes = summaries.data.total_beneficiaries;
    setTotalBeneficiaries(totalBeneficiariesRes);
  };

  const fetchSummaryGithub = useCallback(async () => {
    const fetched = await getFileContent('data', 'beneficiary-summary.json');
    setOtherSummaries(fetched);
  }, []);

  useEffect(() => {
    fetchSummary();
    fetchSummaryGithub();
  }, []);

  return (
    <Grid container spacing={SPACING.GRID_SPACING}>
      <Grid item xs={4}>
        <SummaryCard title={'Total Collected'} total={otherSummaries?.totalCollected} subtitle={'households'} />
      </Grid>
      <Grid item xs={4}>
        <SummaryCard title={'Total Validated'} total={otherSummaries?.totalValidated} color="warning" subtitle={'households'} />
      </Grid>
      <Grid item xs={4}>
        <SummaryCard title={'Total Approved'} total={totalBeneficiaries} color="success" subtitle={'households'} />
      </Grid>
    </Grid>
  );
};

export default Summaries;
