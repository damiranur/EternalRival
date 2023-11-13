import { mockHandlers } from './mockHandlers';
import { setupServer } from 'msw/node';
export const server = setupServer(...mockHandlers);
