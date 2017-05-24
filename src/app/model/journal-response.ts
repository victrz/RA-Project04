import {IJournalResponse} from "./Ijournal-response";
import { JournalContents } from "./journal-contents";
export class JournalResponse implements IJournalResponse{
  status?:number;
  contents?:JournalContents;
  constructor(status: number=0, contents:JournalContents){
    this.status= status;
    this.contents = contents;
  }
}
