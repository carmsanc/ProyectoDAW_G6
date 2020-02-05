import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { ContentComponent } from './components/content/content.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import {ArticleComponent} from './components/article/article.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login/login.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './core/auth/auth.guard';



const routes: Routes = [
  { path:'', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Contacto', component: ContactusComponent },
  { path: 'Registro', component: SignupComponent },
  { path: 'Noticias', component: BlogComponent}, 
  { path: 'Articulo/:id', component: ArticleComponent},
  { path: '404', component: NotfoundComponent},
  { path: 'Perfil', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
