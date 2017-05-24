import {IJournalEntries} from "./Ijournal-entries";
import { Journal } from './journal';
export class JournalEntries implements IJournalEntries {
  journals: Journal[];
  constructor(journals: Journal[] = []){
    this.journals = journals;
  }
}
