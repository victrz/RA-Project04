import { IJournal } from "./Ijournal";
import { IJournalContents} from "./Ijournal-contents";
export interface IJournalResponse {
  status?:number;
  contents?:IJournalContents;
}
