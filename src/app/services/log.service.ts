import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public className = '[LogService] ';

  log(className: string, msg: any) {
    console.log(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }

  error(className: string, msg: any) {
    console.error(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }

  warn(className: string, msg: any) {
    console.warn(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }
}
