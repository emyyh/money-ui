import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo: any = '/assets/icons/logo_icon.png';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this.router.navigate(['dashboard'])
  }
}
