import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { AccountModule }  from './account/account.module';
import { ConfigService } from './shared/utils/config.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HeaderEmailComponent } from './header-email/header-email.component';
import { GameModule } from './game/game.module';
import { HistoryModule } from './history/history.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthUsersGuard } from './shared/guard/authUsers.guard';




@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    HomeComponent,
    HeaderComponent,
    HeaderEmailComponent

  ],
  imports: [ 
    AccountModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GameModule,
    HistoryModule,
    BrowserAnimationsModule,
   
  ],
  providers: [UserService,ConfigService,AuthGuard, AuthUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }