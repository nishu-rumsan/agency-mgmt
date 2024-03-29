import DashboardLayout from '@layouts/dashboard';
import { Page } from '@components/page';
import { useSettingsContext } from '@components/settings';
import { Container } from '@mui/material';
import { ActionMenu, ProjectViewComp } from '@sections/projects/view';
import { useRouter } from 'next/router';
import { ProjectProvider } from '@contexts/projects';
import { useAuthContext } from 'src/auth/useAuthContext';

const PAGE_TITLE = `Project: Detail`;

export default function ProjectView() {
  const { themeStretch } = useSettingsContext();
  const { roles } = useAuthContext();
  const {
    push: routerPush,
    query: { projectId },
  } = useRouter();

  const actionMenuItems = [
    {
      name: 'Edit Project',
      href: `/projects/${projectId}/edit`,
      onClick: () => routerPush(`/projects/${projectId}/edit`),
    },
    // {
    //   name: 'Add Budget',
    //   href: `/projects/${projectId}/add-budget`,
    //   onClick: () => routerPush(`/projects/${projectId}/add-budget`),
    // },
  ];

  return (
    <ProjectProvider>
      {/* <Page
        title={PAGE_TITLE}
        nocard
        action={roles.isAgencyOrPalika() && <ActionMenu menuItems={actionMenuItems} actionTitle={'Actions'} />}
      > */}
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ProjectViewComp />
      </Container>
      {/* </Page> */}
    </ProjectProvider>
  );
}

ProjectView.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

ProjectView.propTypes = {};
