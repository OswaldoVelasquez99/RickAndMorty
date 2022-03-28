import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'episodes', loadChildren: () => import('./api/episodes/episodes.module').then(m => m.EpisodesModule) }, 
  { path: 'episode/:id', loadChildren: () => import('./api/episode/episode.module').then(m => m.EpisodeModule) }, 
  { path: 'locations', loadChildren: () => import('./api/locations/locations.module').then(m => m.LocationsModule) }, 
  { path: 'location/:id', loadChildren: () => import('./api/location/location.module').then(m => m.LocationModule) }, 
  { path: 'character/:id', loadChildren: () => import('./api/character/character.module').then(m => m.CharacterModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'profile', loadChildren: () => import('./login/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'register', loadChildren: () => import('./login/register/register.module').then(m => m.RegisterModule) },
  { path: '**', loadChildren: () => import('./login/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
