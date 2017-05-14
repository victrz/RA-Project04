//import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JournalPostsComponent }   from './journal-posts.component';
import { SingleAdventureComponent }   from './single-adventure.component';
import { HomepageComponent }   from './homepage.component';
import { AboutComponent } from './about.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomepageComponent },
  { path: 'journal-posts',  component: JournalPostsComponent },
  { path: 'single-adventure',  component: SingleAdventureComponent },
  { path: 'about',  component: AboutComponent },
   { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
