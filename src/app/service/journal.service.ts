import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Journal } from '../model/journal';
//import { JournalEntries } from '../model/journal-entries';

@Injectable()
export class JournalService {
  private postURL = 'http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2';
  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  journalsUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

  constructor(private http: Http) { }

  getJournals(): any {
    const getTheData = this.http.get(this.journalsUrl);
    const newPromise: any = getTheData.toPromise();
    const successFn: Function = resp => { return resp.json(); };
    const failureFn: Function = err => {console.log(err)};
    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    return resolvedPromise;
  }
  postEntry(params: string): Promise<any> {
  // this.postURL = this.postUrl + "params=" ;
   //+ params;

     let responseFn:any = res => {
         console.log(res);
         console.log('*****************');
     };
     let postProcess = this.http.post(this.postURL, params, {headers: this.headers});
     let whatToDoNext = postProcess.toPromise().then(responseFn).catch(this.handleError);
     let theNextSteps = Promise.resolve();
     return theNextSteps;
   }

   handleError(error){
     console.log(error);
     // blah
   }
   findJournal(id: number | string) {
    return resolvedPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
   }

}
