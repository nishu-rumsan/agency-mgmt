// routes
import { PATH_DASHBOARD } from './routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API || '';
export const RAHAT_BACKEND = process.env.NEXT_PUBLIC_RAHAT_BACKEND || '';

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Rahat';

export const WSS_SERVER = HOST_API.replace('http', 'ws');

export const BLOCKCHAIN_EXPLORER = process.env.NEXT_PUBLIC_BLOCKCHAIN_EXPLORER || 'https://explorer.testnet.rsk.co';

export const FLICKR_APIKEY = process.env.NEXT_PUBLIC_FLICKR_APIKEY || '';
export const FLICKR_PHOTOSET = process.env.NEXT_PUBLIC_FLICKR_PHOTOSET || '';
export const IPFS_GATEWAY = process.env.NEXT_PUBLIC_IPFS_GATEWAY || '';

export const COGNITO_API = {
  userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.AWS_COGNITO_CLIENT_ID,
};

export const AUTH0_API = {
  clientId: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
};

export const MAPBOX_API = process.env.MAPBOX_API;

export const WSS_EVENTS = {
  welcome: 'welcome',
  notification: 'notification',
  rahat_claimed: 'rahat_claimed',
};

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
