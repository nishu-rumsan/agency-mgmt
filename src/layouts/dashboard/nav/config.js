// routes
import { PATH_BENEFICIARY, PATH_DASHBOARD, PATH_PROJECTS, PATH_REPORTS, PATH_VENDORS } from '@routes/paths';
// components
import SvgColor from '@components/svg-color';
import Iconify from '@components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} sx={{ width: 1, height: 1 }} />;
// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  admin: icon('ic:outline-admin-panel-settings'),
  projects: icon('pajamas:project'),
  beneficiary: icon('mdi:user-convert'),
  dashboard: icon('carbon:dashboard'),
  vendors: icon('material-symbols:anchor'),
  mobilizers: icon('ic:baseline-network-ping'),
  financialInstitution: icon('material-symbols:finance-chip-outline'),
  reports: icon('iconoir:reports'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: 'Dashboard',
        path: PATH_DASHBOARD.root,
        icon: ICONS.dashboard,
      },
      {
        title: 'Projects',
        path: PATH_PROJECTS.root,
        icon: ICONS.projects,
      },
      {
        title: 'Beneficiary',
        path: PATH_BENEFICIARY.root,
        icon: ICONS.beneficiary,
      },
      {
        title: 'Vendors',
        path: PATH_VENDORS.root,
        icon: ICONS.vendors,
      },
      {
        title: 'Mobilizers',
        path: PATH_DASHBOARD.three,
        icon: ICONS.mobilizers,
      },
      {
        title: 'Financial Institutions',
        path: PATH_DASHBOARD.three,
        icon: ICONS.financialInstitution,
      },
      {
        title: 'Administation',
        path: PATH_DASHBOARD.three,
        icon: ICONS.admin,
        children: [
          {
            title: 'Campaigns',
            path: PATH_DASHBOARD.three,
          },
          {
            title: 'Users',
            path: PATH_DASHBOARD.three,
          },
        ],
      },
      {
        title: 'Reports',
        path: PATH_DASHBOARD.three,
        icon: ICONS.reports,
        children: [
          {
            title: 'Real Time',
            path: PATH_REPORTS.realTime,
          },
          {
            title: 'Demographic',
            path: PATH_REPORTS.demographic,
          },
          {
            title: 'Anomaly',
            path: PATH_REPORTS.anomaly,
          },
        ],
      },
    ],
  },
];

export default navConfig;
