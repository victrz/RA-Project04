import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Journal } from '../model/journal';
@Injectable()
export class JournalService {
  private postURL = 'http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2';
  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  //URL without proxy:
  // journalsUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";
  journalsUrl = "http://www.edapostol.com/proxy/proxy.php?url=http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

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
    console.log(postURL);
     let responseFn:any = res => {
       let string = res['_body'];
       let check = string.substring(2,14);
       if (check == "post_created"){
         window.alert("Success! Post was Created!");
         var inputValue = (<HTMLFormElement>document.getElementById('apiForm')).reset();
        }
        else{
          window.alert("Error");
        }
     };
     let postProcess = this.http.post(postURL, params);
     let handlerFunctions = postProcess.toPromise().then(responseFn).catch(this.handleError);
     let resolvePromise = Promise.resolve();
     return resolvePromise;
  }
  handleError(error){
    window.alert("Error!");
  }
  getJournalByID(id): any {
    const getTheData = this.http.get(this.journalsUrl);
    const newPromise: any = getTheData.toPromise();
    const successFn: Function = resp => { return resp.json(); };
    const failureFn: Function = err => {console.log(err)};
    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    return resolvedPromise;
  }
}
