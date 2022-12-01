import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { PlantLottieComponent } from './plant-lottie/plant-lottie.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';


export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ContentComponent,
    CardComponent,
    ButtonGroupComponent,
    PlantLottieComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    ProfilepageComponent,
    HeaderBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
