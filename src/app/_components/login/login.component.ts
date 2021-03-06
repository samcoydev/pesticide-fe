import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../services/account.service';
import { User } from '../../models/user';
import {trigger, style, animate, transition, group} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-10%)' }), 
        animate(1000, style({opacity: 1, transform: 'translateY(0%)'}))
      ]) 
    ])
  ]
})
export class LoginComponent implements OnInit {
  public className = '[LoginComponent] ';

  form: FormGroup;
  loading = false;
  submitted = false;
  error: '';
  currentUser: User;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.accountService.user.subscribe(x => this.currentUser = x);
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.accountService.resetUser();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid)
      return;

    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }
}
