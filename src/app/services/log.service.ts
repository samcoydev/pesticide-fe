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
      console.log(className + ' [' + new Date().toDateString() + '] ' + JSON.stringify(msg))
  }

  error(className: string, msg: any) {
    console.error(className + ' [' + new Date().toDateString() + '] ' + JSON.stringify(msg))
  }

  warn(className: string, msg: any) {
    console.warn(className + ' [' + new Date().toDateString() + '] ' + JSON.stringify(msg))
  }
}
