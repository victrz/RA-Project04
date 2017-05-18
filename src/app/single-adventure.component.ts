import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Location }               from '@angular/common';
import { Journal } from './model/journal';


import { JournalService }  from './service/journal.service';


@Component({
  selector: 'single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['../style.css']
})
export class SingleAdventureComponent{

  constructor(private route: ActivatedRoute, private router: Router, private service: JournalService) { }

  journal:Journal;
  testingcar:any = "testing";

  testFn(){
    console.log("TESTING HERE");

  }

  ngOnInit() {

    let r = this.route;
    console.log(r);
    let rParams:Params = r.params;
    let currentID = rParams['_value']['id'];
    console.log(currentID);
    this.journal = this.service.getJournalByID(currentID);

  }

}
