import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Journal } from './model/journal';
import { JournalService }  from './service/journal.service';
import { JournalResponse } from './model/journal-response';


@Component({
  selector: 'single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['../style.css', './single-adventure.component.css']
})
export class SingleAdventureComponent{

  constructor(private route: ActivatedRoute, private router: Router, private service: JournalService) { }
  currentJournal:Journal;
  journalEntries:JournalResponse;
  journalID:number;
  currentAdventure:Journal;


  ngOnInit(){

    let r = this.route;
    console.log(r);
    let rParams:Params = r.params;
    let currentID = rParams['_value']['id'];
    this.journalID = currentID;
    // console.log(currentID);

    const myPromiseOfJournals: any = this.service.getJournals();
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
            newJournal.title = myResponse[item]['title'].replace(/&#039;/g, `'`);
            newJournal.content = myResponse[item]['content'].replace(/&#039;/g, `'`);
            newJournal.categories = myResponse[item]['categories'];
            let blankImage="http://www.fitworx.com/wp-content/uploads/2016/10/sorry-image-not-available.png";
            let lowerCaseImage = myResponse[item]['image'].toString().toLowerCase();
            newJournal.image = lowerCaseImage=(lowerCaseImage === 'false')?blankImage:myResponse[item]['image'];
            newJournal.date = myResponse[item]['date'];
            newJournal.author = myResponse[item]['author'];
            newEntries.allJournals.push(newJournal);
            break;
        }
      }
      this.journalEntries = newEntries;
      console.log("$$$$$$");
      console.log(this.journalEntries.allJournals[2].title);
      return newEntries;

    }
    const matchID: Function = () => {
      let q = (x) => {
        console.log(this.journalID);
        console.log(x.id);
        console.log('------------------');
        let k =  parseInt(x.id, 10) ==  this.journalID;
        //console.log(k);
        return k;
      };
      let newArray = this.journalEntries.allJournals.find(q);
      console.log("LOGGING");
      console.log(this.journalEntries.allJournals);
      console.log(this.journalID);
      console.log(newArray);
      //this.currentAdventure = newArray;

      this.someOtherFunction(newArray);
      //this.renderView(newArray);
       //return newArray;
    }

    const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (r) => { this.journalEntries = r } ).then(matchID));

  }

  someOtherFunction(newArray){
    this.currentAdventure = newArray;

    //document.getElementById('adventure-image').style.backgroundImage="url(`{this.currentAdventure.image}`)";
    // document.getElementById("left-adventure").style.backgroundImage = "url('{j.allJournals[0].image}')";


  }

}
