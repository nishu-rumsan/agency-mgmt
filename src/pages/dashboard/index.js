import { Container } from '@mui/material';
import DashboardLayout from '@layouts/dashboard';
import { Page } from '@components/page';
import { useSettingsContext } from '@components/settings';
import { DashboardComponent } from '@sections/dashboard';
import { ContextProvider } from '@sections/dashboard/context';

// ----------------------------------------------------------------------

const PAGE_TITLE = 'Dashboard';

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function Dashboard() {
  const { themeStretch } = useSettingsContext();

  return (
    <ContextProvider>
      <Page title={PAGE_TITLE} nocard>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <DashboardComponent />
        </Container>
      </Page>
    </ContextProvider>
  );
}
