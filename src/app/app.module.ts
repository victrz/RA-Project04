import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalPostsComponent } from './journal-posts.component';
import { SingleAdventureComponent } from './single-adventure.component';
import { HomepageComponent } from './homepage.component';
import { AboutComponent } from './about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ShowLatestJournalsComponent } from './show-latest-journals.component';
import { JournalService } from './service/journal.service';
import { SubmitJournalEntryComponent } from './submit-journal-entry.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { FooterComponent } from './footer/footer.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';



@NgModule({
  declarations: [
    AppComponent,
    JournalPostsComponent,
    SingleAdventureComponent,
    HomepageComponent,
    AboutComponent,
    PageNotFoundComponent,
    ShowLatestJournalsComponent,
    SubmitJournalEntryComponent,
    TopnavigationComponent,
    FooterComponent,
    AdventureListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
