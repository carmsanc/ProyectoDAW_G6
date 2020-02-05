import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContentComponent } from './components/content/content.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SocialComponent } from './components/social/social.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { ArticleComponent } from './components/article/article.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login/login.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertModule } from "./components/shared/components/alert/alert.module";
import { TokenService } from './core/token/token.service';
import { AuthInterceptor } from './core/auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ContentComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SocialComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    ProfileComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AlertModule
  ],
  providers: [TokenService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
