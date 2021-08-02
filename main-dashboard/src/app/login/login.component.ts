import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(`username : ${this.username}, password : ${this.password}`)
    localStorage.setItem('username',this.username);
    localStorage.setItem('password',this.password);
    this.router.navigateByUrl("/home");
  }
}
