export interface IJournal {
  id?:number;
  title:string;
  content:string;
  categories?:Array<string>;
  image:string;
  date:string;
  author?:string;
}
