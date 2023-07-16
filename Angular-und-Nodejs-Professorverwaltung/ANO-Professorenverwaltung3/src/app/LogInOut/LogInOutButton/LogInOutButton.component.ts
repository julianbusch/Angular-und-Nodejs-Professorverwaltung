import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-LogInOutButton',
  templateUrl: './LogInOutButton.component.html',
  styleUrls: ['./LogInOutButton.component.css']
})

export class LoginOutButtonComponent implements OnInit {
  constructor(public loginService: LoginService, public router: Router) { }
  ngOnInit() { }
  login() { this.router.navigateByUrl('login'); }
  logout() { this.loginService.logout(); }
  }
