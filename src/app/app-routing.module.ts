import { NgModule }             from '@angular/core';
import { RouterModule, Routes,  Router, ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from './app.component';
import { JournalPostsComponent }   from './journal-posts/journal-posts.component';
import { SingleAdventureComponent }   from './single-adventure/single-adventure.component';
import { AdventureListComponent }   from './adventure-list/adventure-list.component';
import { HomepageComponent }   from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomepageComponent },
  { path: 'journal-posts',  component: JournalPostsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'single-adventure/:id',  component: SingleAdventureComponent },
  { path: 'adventure-list',  component: AdventureListComponent },

  { path: '**', component: PageNotFoundComponent }
  ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
