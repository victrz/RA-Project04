import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '../model/journal';
import { CategoryEnum } from '../model/category.enum';
import { JournalService } from '../service/journal.service';


@Component({
  selector: 'submit-journal-entry',
  templateUrl: './submit-journal-entry.component.html',
  styleUrls: ['../../style.css','./submit-journal-entry.component.css']
})
export class SubmitJournalEntryComponent implements OnInit {

  categories: Array<string> ;
  categoryValue: CategoryEnum;
  CategoryEnum: typeof CategoryEnum = CategoryEnum;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    console.log("IN SUBMIT JOURNAL COMPONENT");
    const x = CategoryEnum;
    const options = Object.keys(x);
    this.categories = options.slice(options.length / 2);
  }

  parseSelectedValue(value: string) {
    console.log(value);
    this.categoryValue = CategoryEnum[value];
  }

  submitForm(e:any) {
    console.log("SUBMITFROM E BUTTON HANDLER FUNCTION");
    const theForm = (e.target as HTMLButtonElement).parentElement;
    /* */
    const serializedForm = this.jsSerializeArray(theForm);
    const formData = JSON.stringify(serializedForm);
    console.log("FORMDATA:");
    console.log(formData);
    const dataParams = {'params': formData} ;
    const postThisJournal = this.journalService.postEntry(formData);

    console.log("form submission result is: ");
    console.log(postThisJournal);
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
   resetForm(e:any) {
     console.log("RESET");
     const theForm = (e.target).parentElement.reset();
}

}
