import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./user/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./user/register/register.component').then(c => c.RegisterComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./user/profile/profile.component').then(c => c.ProfileComponent)
    },

    {
        path: 'themes',
        children: [
            {
                path: '',
                loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
            },
            {
                path: ':themeId',
                loadComponent: () => import('./theme/current-theme/current-theme.component').then(c => c.CurrentThemeComponent),
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'add-theme',
        loadComponent: () => import('./theme/add-theme/add-theme.component').then(c => c.AddThemeComponent),
        canActivate: [AuthGuard],
    },

    {
        path: 'error',
        loadComponent: () => import('./core/error-msg/error-msg.component').then(c => c.ErrorMsgComponent)
    },
    {
        path: '404',
        loadComponent: () => import('./error/error.component').then(c => c.PageNotFoundComponent)
    },
    {
        path: '**',
        redirectTo: '/404'
    },
];
