import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamdataService } from './examdata.service';

@Injectable({
  providedIn: 'root'
})
export class ExamGuard implements CanActivate {
  constructor(private demo:ExamdataService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.demo.islogg();
  }

}
