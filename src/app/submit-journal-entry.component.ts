import { Component, OnInit, Input } from '@angular/core';
import { Journal } from './model/journal';
import { CategoryEnum } from './model/category.enum';
import { JournalService } from './service/journal.service';


@Component({
  selector: 'submit-journal-entry',
  templateUrl: './submit-journal-entry.component.html',
  styleUrls: ['./submit-journal-entry.component.css']
})
export class SubmitJournalEntryComponent implements OnInit {

  categories: Array<string> ;
  categoryValue: CategoryEnum;
  CategoryEnum: typeof CategoryEnum = CategoryEnum;

  constructor() { }

  ngOnInit() {
    console.log(this.CategoryEnum.Miscellaneous);
    console.log('add journal init');
    const x = CategoryEnum;
    console.log(x);
    const options = Object.keys(CategoryEnum);
    console.log(options);
    this.categories = options.slice(options.length / 2);
    console.log(this.categories);
    debugger;
  }

  parseSelectedValue(value: string) {
    console.log(value);
    this.categoryValue = CategoryEnum[value];
  }
   jsSerializeArray = (form) => {
     var field, l, s = [];
     if (typeof form == 'object' && form.nodeName == "FORM") {
       var len = form.elements.length;
       for (var i=0; i<len; i++) {
         field = form.elements[i];
         if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
           if (field.type == 'select-multiple') {
             l = form.elements[i].options.length;
             for (var j=0; j<l; j++) {
               if(field.options[j].selected)
                 s[s.length] = { name: field.name, value: field.options[j].value };
             }
           } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
             s[s.length] = { name: field.name, value: field.value };
           }
         }
       }
     }
     return s;
   };
  // something like body.getElementById('button-submit-joural').addEventListener('click', journalService.postEntry(), false);
  //bind the form to the event handler
//get button element to submit form and, event listener for click, handler function to gather input data
}
