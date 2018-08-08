import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { GalleryComponent } from './gallery/gallery.component';
import {  ImageBoatComponent  } from './image-boat/image-boat.component';
import {  ImageCampingComponent   } from './image-camping/image-camping.component';
import {  ImageLibraryComponent   } from './image-library/image-library.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'image-boat', component: ImageBoatComponent },
    { path: 'image-camping', component: ImageCampingComponent  },
    { path: 'image-library', component: ImageLibraryComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);