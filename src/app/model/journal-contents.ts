import { IJournalContents } from "./Ijournal-contents";
import { Journal } from "./journal";
import { JournalEntries } from "./journal-entries";
export class JournalContents implements IJournalContents{
  count?:number;
  allJournals?:any;
  constructor(count: number=0, allJournals: Array<any> = []){
    this.count= count;
    this.allJournals = allJournals;
  }
}
