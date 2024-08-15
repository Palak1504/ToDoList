// import { Component } from '@angular/core';
// import { MenuItem } from 'primeng/api';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent {
//   items: MenuItem[] = [];
//   date: Date = new Date();
//   cities: any[] = [
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Paris', code: 'PRS' },
//     { name: 'Tokyo', code: 'TKY' },
//     { name: 'Istanbul', code: 'IST' }
//   ];
//   selectedCity: any;
//   creditLineData: any = {
//     labels: ['Credit Line', 'Utilized'],
//     datasets: [
//       {
//         label: 'Credit Line',
//         data: [100, 50],
//         backgroundColor: ['#2196F3', '#9C27B0'],
//       }
//     ]
//   };
//   outstandingData: any = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Outstanding',
//         data: [40, 30, 20, 15, 30, 25, 15],
//         backgroundColor: '#FFC107',
//       }
//     ]
//   };
//   repaymentData: any = {
//     labels: ['Principal', 'Interest'],
//     datasets: [
//       {
//         label: 'Repayments',
//         data: [70, 30],
//         backgroundColor: ['#4CAF50', '#F44336'],
//       }
//     ]
//   };
//   totalPaidData: any = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Total Paid',
//         data: [20, 15, 25, 10, 15, 20, 15],
//         backgroundColor: '#9C27B0',
//       }
//     ]
//   };

//   constructor() { }

//   ngOnInit(): void {
//     this.items = [
//       { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
//       { label: 'Lead', icon: 'pi pi-fw pi-user', routerLink: ['/lead'] },
//       { label: 'Account List', icon: 'pi pi-fw pi-users', routerLink: ['/account-list'] },
//       { label: 'Loan', icon: 'pi pi-fw pi-money-bill-wave', routerLink: ['/loan'] },
//       { label: 'Account Transaction', icon: 'pi pi-fw pi-money-bill', routerLink: ['/account-transaction'] },
//       { label: 'Invoice Master', icon: 'pi pi-fw pi-file', routerLink: ['/invoice-master'] },
//       { label: 'Invoice Generation', icon: 'pi pi-fw pi-print', routerLink: ['/invoice-generation'] },
//       { label: 'BL Stamp Uploader', icon: 'pi pi-fw pi-upload', routerLink: ['/bl-stamp-uploader'] },
//       { label: 'User', icon: 'pi pi-fw pi-user-plus', routerLink: ['/user'] },
//       { label: 'Role', icon: 'pi pi-fw pi-user-edit', routerLink: ['/role'] },
//       { label: 'Role Page Permission', icon: 'pi pi-fw pi-lock', routerLink: ['/role-page-permission'] },
//       { label: 'Company', icon: 'pi pi-fw pi-building', routerLink: ['/company'] },
//       { label: 'NBFC API', icon: 'pi pi-fw pi-envelope', routerLink: ['/nbfc-api'] },
//       { label: 'Template Master', icon: 'pi pi-fw pi-file-alt', routerLink: ['/template-master'] },
//       { label: 'Invoices', icon: 'pi pi-fw pi-list', routerLink: ['/invoices'] },
//       { label: 'DSA', icon: 'pi pi-fw pi-upload', routerLink: ['/dsa'] },
//       { label: 'MIS', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/mis'] },
//     ];
//   }
// }
