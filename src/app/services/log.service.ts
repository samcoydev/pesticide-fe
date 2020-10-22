import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public className = '[LogService] ';

  private prodMode = environment.production;

  log(className: string, msg: any) {
    if (!this.prodMode)
      console.log(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }

  error(className: string, msg: any) {
    console.error(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }

  warn(className: string, msg: any) {
    console.warn(className + JSON.stringify(msg)+ ' [' + new Date().toDateString() + '] ')
  }
}
