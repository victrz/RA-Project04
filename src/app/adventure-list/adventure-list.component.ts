import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Journal } from '../model/journal';
import { JournalService }  from '../service/journal.service';
import { JournalResponse } from '../model/journal-response';

@Component({
  selector: 'adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['../../style.css','./adventure-list.component.css']
})
export class AdventureListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: JournalService) { }
  currentJournal:Journal;
  journalEntries:JournalResponse;
  journalID:number;

  ngOnInit() {
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
        //
        //
        // const renderList: Function = () => {
        //
        //   // let documentFragment = new DocumentFragment();
        //   // let outerSection = document.createElement("section");
        //   //outerSection.setAttribute("id","list-here");
        //   for (let i=0; i<15; i++){
        //     let currentTitle = this.journalEntries.allJournals[i]['title'];
        //     let currentDate = this.journalEntries.allJournals[i]['date'];
        //     let currentContent = this.journalEntries.allJournals[i]['content'];
        //     console.log("########");
        //     console.log(currentTitle);
        //     console.log(currentDate);
        //     console.log(currentContent);
        //
        //     let eachCell = document.createElement("div");
        //     // //eachCell.setAttribute("class","new-adventure");
        //     this.newAdventure(eachCell, currentTitle, currentDate, currentContent);
        //     // //appends completed product cell div to the main-carousel outer div:
        //     document.getElementById("the-list").appendChild(eachCell);
        //   }
        // }
        const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (r) => { this.journalEntries = r } ) );

      }
      //   newAdventure(cell, title, date, content){
      //   console.log("CREATING A NEWCELL");
      //       let cellBox = this.createInnerCellBox();
      //       let titleName = this.createTitleName(title);
      //       let titleDate = this.createDate(date);
      //       let titleContent = this.createContent(content);
      //       cellBox.appendChild(titleDate);
      //       cellBox.appendChild(document.createElement("br"));
      //       cellBox.appendChild(titleName);
      //       cellBox.appendChild(document.createElement("br"));
      //       // // let productImage = this.createProductImage(currentProduct);
      //       // // cellBox.appendChild(productImage);
      //       // // cellBox.appendChild(document.createElement("br"));
      //       cellBox.appendChild(titleContent);
      //       cellBox.appendChild(document.createElement("br"));
      //       cell.appendChild(cellBox);
      //   }
      //
      //
      // createInnerCellBox(){
      //     //creates cellBox div to hold rendered content within each carousel-cell:
      //     let newCellBox = document.createElement("div");
      //     newCellBox.style.backgroundColor = "#FFFFFF";
      //     return newCellBox;
      // }
      // createTitleName(title){
      //     let newName = document.createElement("h1");
      //     newName.style.color = "#0000ff";
      //     let newNameContent = document.createTextNode(`${title}`);
      //     newName.appendChild(newNameContent);
      //     return newName;
      // }
      // createDate(date){
      //     let newDate = document.createElement("h2");
      //     newDate.style.color = "#0000ff";
      //     let newDateContent = document.createTextNode(`${date}`);
      //     newDate.appendChild(newDateContent);
      //     return newDate;
      // }
      // createContent(content){
      //     let newContent= document.createElement("p");
      //     newContent.style.color = "#0000ff";
      //     let newContentContent = document.createTextNode(` ${content.substring(0,200)} [...]`);
      //     newContent.appendChild(newContentContent);
      //     return newContent;
      // }

}
