import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public className = '[LogService] ';
  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
}
