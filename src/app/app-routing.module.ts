import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    private router: Router
) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const isLoggedIn = route.data.isLoggedIn; //log in service

    if (!isLoggedIn) {
      // Check that the user is logged in...
      // this.router.navigate(['/login']);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

const routes: Routes = [
  {path: '', 
  component: HomeComponent, 
  data: {isLoggedIn: false},
  canActivate:[AccessGuard],
  children: [
    {path: '',
   component: ContentComponent
  },
    {path: 'profilepage',
   component: ProfilepageComponent
  },
  ]
},
  {path: 'login',
   component: LoginComponent
  },
  {path: '**',
   component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AccessGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
