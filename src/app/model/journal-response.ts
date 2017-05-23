import { IJournalResponse } from "./Ijournal-response";
import { Journal } from "./journal";
import { JournalEntries } from "./journal-entries";
export class JournalResponse implements IJournalResponse{
  count?:number;
  allJournals?:any;
  constructor(count: number=0, allJournals: Array<any> = []){
    this.count= count;
    this.allJournals = allJournals;
  }
}
