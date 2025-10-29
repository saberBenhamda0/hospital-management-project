import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Home as doctorHome } from './pages/doctor/home/home';
import { Home as patientHome } from './pages/patient/home/home';
import { Home as AdminHome } from './pages/admin/home/home';
import { Patients } from './pages/admin/patients/patients';
import { Main } from './pages/main/main';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Services } from './pages/services/services';
import { Scan } from './pages/doctor/scan/scan';
import { Report } from './pages/doctor/report/report';
import { Conversation } from './pages/conversation/conversation';
import { PatientDetails } from './pages/patient/patient-details/patient-details';

export const routes: Routes = [
    // auth routes
    {path:'login', component:Login},
    {path:'signup', component:Signup},

    // shared routes
    {path:'conversation', component:Conversation},

    // doctor routes
    {path:'doctor/home', component:doctorHome},
    {path:'doctor/scan', component:Scan},
    {path:'doctor/report', component:Report},

    // patient routes
    {path:'patient/home', component:patientHome},
    {path:'patient/:id', component:PatientDetails},

    // admin routes
    {path:'admin/home', component:AdminHome},
    {path:'admin/patients', component:Patients},

    // landing page
    {path:"", component:Main},

    // extra pages
    {path:'about-us', component:AboutUs},
    {path:'contact-us', component:ContactUs},
    {path:'services', component:Services}
];
