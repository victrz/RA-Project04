import { Journal } from './journal';
export class JournalEntries {

  journals: Journal[];

  constructor(journals: Journal[] = []){

    this.journals = journals;

  }
}
