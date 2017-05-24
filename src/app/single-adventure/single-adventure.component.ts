import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Journal } from '../model/journal';
import { JournalService } from '../service/journal.service';
import { JournalResponse } from '../model/journal-response';
import { JournalContents } from '../model/journal-contents';
@Component({
  selector: 'single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['../../style.css', './single-adventure.component.css']
})
export class SingleAdventureComponent{
  constructor(private route: ActivatedRoute, private router: Router, private service: JournalService){}
  currentJournal:Journal;
  journalEntries:JournalContents;
  returnedContents = new JournalContents();
  journalID:number;
  currentAdventure:Journal;

  ngOnInit(){
    let r = this.route;
    let rParams:Params = r.params;
    let currentID = rParams['_value']['id'];
    this.journalID = currentID;
    const myPromiseOfJournals: any = this.service.getJournals();
    const extractDataFromPromise: Function = (response) => {
      let myResponse:JournalResponse = <JournalResponse>response as JournalResponse;
      let returnedContents = myResponse.contents;
      let newEntries = new JournalContents();
      let newCount:number = 0;
      for (let item in returnedContents){
        switch (item){
          case "count":
            newCount= returnedContents['count'];
            newEntries.count = newCount;
            //parseInt(newEntries['count'], 10);
            break;
          default:
            let newJournal = new Journal();
            newJournal.id = returnedContents[item]['ID'];
            newJournal.title = returnedContents[item]['title'].replace(/&#039;/g, `'`);
            newJournal.content = returnedContents[item]['content'].replace(/&#039;/g, `'`);
            newJournal.categories = returnedContents[item]['categories'];
            let blankImage="http://www.fitworx.com/wp-content/uploads/2016/10/sorry-image-not-available.png";
            let lowerCaseImage = returnedContents[item]['image'].toString().toLowerCase();
            newJournal.image = lowerCaseImage=(lowerCaseImage === 'false')?blankImage:returnedContents[item]['image'];
            newJournal.date = returnedContents[item]['date'];
            newJournal.author = returnedContents[item]['author'];
            newEntries.allJournals.push(newJournal);
            break;
        }
      }
      this.journalEntries = newEntries;
      return newEntries;
    }
    const matchID: Function = () => {
      let q = (x) => {
        console.log(this.journalID);
        console.log(x.id);
        console.log('------------------');
        let k =  parseInt(x.id, 10) ==  this.journalID;
        return k;
      };
      let newArray = this.journalEntries.allJournals.find(q);
      this.holdMatchedJournal(newArray);
    }
    const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (r) => { this.journalEntries = r } ).then(matchID));
  }
  holdMatchedJournal(newArray){
    this.currentAdventure = newArray;
  }
}
