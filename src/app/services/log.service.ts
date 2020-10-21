import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public className = '[LogService] ';

  log(className: string, msg: any) {
    let _timeStamp = new Date();

    console.log(className + _timeStamp.toDateString() + ' ' + JSON.stringify(msg));
  }
}
