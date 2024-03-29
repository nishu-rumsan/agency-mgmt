// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const DEBUG_MODE = process.env.NEXT_PUBLIC_DEBUG_MODE === 'true' || false;
export const HOST_API = process.env.NEXT_PUBLIC_HOST_API || '';
export const RAHAT_BACKEND = process.env.NEXT_PUBLIC_RAHAT_BACKEND || '';
export const TWIML_API = process.env.NEXT_PUBLIC_TWIML_API || 'https://twiml.rahat.io/api/v1';
export const SOMLENG_API = process.env.NEXT_PUBLIC_SOMLENG_API || 'https://api.somleng.org';
export const SOMLENG_API_KEY = process.env.NEXT_PUBLIC_SOMLENG_API_KEY || '';
export const SOMLENG_API_TOKEN = process.env.NEXT_PUBLIC_SOMLENG_API_TOKEN || '';

export const GITHUB_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL || 'https://api.github.com';

export const GITHUB_API_BRANCH = process.env.NEXT_PUBLIC_GITHUB_API_BRANCH || 'stage';
export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'rahataid';
export const GITHUB_REPOSITORY = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY || 'agency-mgmt';

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Rahat';

export const WSS_SERVER = HOST_API.replace('http', 'ws');

export const BLOCKCHAIN_EXPLORER = process.env.NEXT_PUBLIC_BLOCKCHAIN_EXPLORER || '';

export const FLICKR_APIKEY = process.env.NEXT_PUBLIC_FLICKR_APIKEY || '';
export const FLICKR_PHOTOSET = process.env.NEXT_PUBLIC_FLICKR_PHOTOSET || '';
export const IPFS_GATEWAY = process.env.NEXT_PUBLIC_IPFS_GATEWAY || '';

export const AWS_BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME || '';
export const AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '';
export const AWS_REGION = process.env.NEXT_PUBLIC_AWS_BUCKET_REGION || '';

export const COGNITO_API = {
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.AWS_COGNITO_CLIENT_ID,
};

export const AUTH0_API = {
  clientId: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
};

export const MAPBOX_API = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export const WSS_EVENTS = {
  welcome: 'welcome',
  notification: 'notification',
  rahat_claimed: 'rahat_claimed',
};

export const PHONE_CODE = '977';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};

export const SPACING = {
  GRID_SPACING: 2,
};

export const ROLES = {
  AGENCY: 'Admin',
  DONOR: 'Donor',
  MANAGER: 'Manager',
  MOBILIZER: 'Mobilizer',
  PALIKA: 'Palika',
};

export const CONTRACTS = {
  RAHAT: 'rahat',
  CASH: 'rahat_cash',
  DONOR: 'rahat_donor',
  REGISTRY: 'rahat_registry',
  WALLET: 'rahat_wallet',
  ADMIN: 'rahat_admin',
  TRIGGER: 'rahat_trigger',
  ERC20: 'rahat_erc20',
};
