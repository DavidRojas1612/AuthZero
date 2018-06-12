import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from './app.routes';

//services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent,
    ProtegidaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
