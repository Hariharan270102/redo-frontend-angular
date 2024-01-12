import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  constructor(public router:Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.username == 'admin' && this.password == 'admin') {
      // Redirect to the admin page or perform other actions
      this.router.navigate(['/homepage'])
      
    } else {
      alert('Invalid credentials');
    }
  }

}
