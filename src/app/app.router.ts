import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes =[
	{
		"path":"",
		"component":HomeComponent
	},
	{
		"path":"profile",
		"component":ProfileComponent,
		canActivate: [AuthGuard]
	}
];

export const router:ModuleWithProviders = RouterModule.forRoot(appRoutes);