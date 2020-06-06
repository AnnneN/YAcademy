import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aboutUs',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
  })
  export class AboutComponent {

    constructor(private router:Router) { 
    }

    register(){
      this.router.navigateByUrl('/registerStudent');
    }

    login(){
      this.router.navigateByUrl('/login');
    }
  }
  