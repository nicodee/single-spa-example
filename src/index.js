import { registerApplication, start } from 'single-spa';

registerApplication(
    'orders',
    () => import('./orders.app.js'),
    () => true
);
start();