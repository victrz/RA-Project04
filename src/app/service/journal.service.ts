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
  postEntry(params: any): Promise<any> {
    let postURL = this.postURL + "?params=" + params;
    console.log(this.postURL);

     let responseFn:any = res => {
         console.log('*****************');
         console.log(res);
        //  let response = res;
        //  let test = response[`_body`];
         //return res;
        //  window.alert("Success! Post was Created!");
        console.log(res[`_body`]);
        let string = res['_body'];
        let check = string.substring(2,14);
        console.log(check);

        if (check == "post_created"){
          window.alert("Success! Post was Created!");
        }
        else{
          window.alert("Error");
        }

     };
     

     let postProcess = this.http.post(postURL, params);
     let whatToDoNext = postProcess.toPromise().then(responseFn).catch(this.handleError);
     //.then(validationFn)
     let theNextSteps = Promise.resolve();
     return theNextSteps;
  }

  handleError(error){
    console.log("ERROR:");
     console.log(error);
     window.alert("Error!" + error);

  }

  getJournalByID(id): any {
    const getTheData = this.http.get(this.journalsUrl);
    const newPromise: any = getTheData.toPromise();
    const successFn: Function = resp => { return resp.json(); };
    const failureFn: Function = err => {console.log(err)};
    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    console.log("$$$$$$$$$$$$");
    console.log(id);
    //loop through
    return resolvedPromise;
  }

}
