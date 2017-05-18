import { Component, OnInit } from '@angular/core';
import { JournalEntries } from './model/journal-entries';
import { Journal } from './model/journal';
import { JournalService } from './service/journal.service';
import { JournalResponse } from './model/journal-response';

@Component({
  selector: 'show-latest-journals',
  templateUrl: './show-latest-journals.component.html',
  styleUrls: ['../style.css']
})
export class ShowLatestJournalsComponent implements OnInit {
  currentJournal:Journal;
  journalEntries:JournalResponse;
  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    console.log('initializing show-latest-journals view');
    const myPromiseOfJournals: any = this.journalService.getJournals();
    const extractDataFromPromise: Function = (response) => {
      let myResponse:JournalResponse = <JournalResponse>response as JournalResponse;
      let newEntries = new JournalResponse();
      let newCount:number = 0;
      for (let item in myResponse){
        switch (item){
          case "count":
            newCount= myResponse['count'];
            newEntries.count = newCount;
            //parseInt(newEntries['count'], 10);
            break;
          default:
            let newJournal = new Journal();
            newJournal.id = myResponse[item]['ID'];
            newJournal.title = myResponse[item]['title'];
            newJournal.categories = myResponse[item]['categories'];
            newJournal.image = myResponse[item]['image'];
            newJournal.date = myResponse[item]['date'];
            newJournal.author = myResponse[item]['author'];
            newEntries.allJournals.push(newJournal);
            break;
        }
      }
      this.renderView(newEntries);
      this.journalEntries = newEntries;

      return newEntries;
    }
    const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (r) => { this.journalEntries = r } ));
  }

  renderView(j){
    //style backgroun images for adventure grid:
    // document.getElementById("left-adventure").style.backgroundImage = "url('{j.allJournals[0].image}')";
    // document.getElementById('RENDERHERE').innerHTML=j.allJournals[1].image;

  }
}
