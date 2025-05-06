export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'NovaGL Quote Admin';
export const APP_DESCRIPTION =  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern admin dashboard for NovaGL Quote';
export const ITEMS_PER_PAGE = Number(process.env.ITEMS_PER_PAGE) || 10;