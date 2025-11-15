import type { MenuItem } from '../types';

export const mainMenu: MenuItem[] = [
  { title: 'Tax Software', path: '/tax-software' },
  {
    title: 'Training',
    path: '/training',
    submenu: [
      { title: 'Software Training', path: '/training/software' },
      { title: 'MyTaxAcademy', path: '/training/mytaxacademy' },
      { title: 'Online CE Center', path: '/training/ce-center' }
    ]
  },
  {
    title: 'Bank Products',
    path: '/bank-products',
    submenu: [
      { title: 'EPS', path: '/bank-products/eps' },
      { title: 'Refund Advantage', path: '/bank-products/refund-advantage' }
    ]
  },
  { title: 'Online Payroll', path: '/online-payroll' },
  { title: 'Marketing', path: '/marketing' },
  { title: 'Contact', path: '/contact' },
  { title: '4Tax.com', path: 'https://4tax.com', external: true }
];