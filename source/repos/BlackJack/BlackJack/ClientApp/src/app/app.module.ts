import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { AccountModule }  from './account/account.module';
import { ConfigService } from './shared/configs/url.config';
import { AuthGuard } from './shared/guards/onlyLoggedOutUsers.guard';
import { HeaderComponent } from './shared/modules/header/header.component';
import { HeaderEmailComponent } from './shared/modules/header-email/header-email.component';
import { GameModule } from './game/game.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthUsersGuard } from './shared/guards/onlyLoggedInUsers.guard';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderEmailComponent,

  ],
  imports: [ 
    AccountModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GameModule,
    BrowserAnimationsModule,
   
  ],
  providers: [UserService,ConfigService,AuthGuard,AuthUsersGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }