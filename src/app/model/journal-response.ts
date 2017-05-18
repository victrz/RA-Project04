import { Journal } from "./journal";
import { JournalEntries } from "./journal-entries";
export class JournalResponse {
  count?:number;
  allJournals?:any;
  constructor(count: number=0, allJournals: Array<any> = []){
    this.count= count;
    this.allJournals = allJournals;
  }
}
