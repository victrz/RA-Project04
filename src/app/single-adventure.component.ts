import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Location }               from '@angular/common';
import { JournalService }  from './service/journal.service';


@Component({
  selector: 'single-adventure',
  templateUrl: './single-adventure.component.html',
  styleUrls: ['../style.css']
})
export class SingleAdventureComponent{

  constructor(  private route: ActivatedRoute,
  private router: Router,
  private service: JournalService) { }

  ngOnInit() {


    this.route.params
      // (+) converts string 'id' to a number
     .switchMap((params: Params) => this.service.findJournal(+params['id']))
     .subscribe((journal: Journal) => this.journal = journal);
  }

}
