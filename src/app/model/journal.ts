export class Journal {
  id:number = 0;
  title:string = "";
  content:string = "";
  categories:Array<string>= [];
  image:string = "";
  date:string = "";
  author:string = "";
  constructor(id:number = 0, title:string = '',
   content:string = '', categories:Array<string> = [], image:string="", date:string="", author:string="") {
    this.id = id;
    this.title = title;
    this.categories = categories;
    this.image = image;
    this.date = date;
    this.author = author;
  }

}
