import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration-page';

  Registration =new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')
  ])
  })

  get username()
  {
   return this.Registration.get('username')
  }
  get email()
  {
   return this.Registration.get('email')
  }
  get mobile()
  {
   return this.Registration.get('mobile')
  }
  get password()
  {
   return this.Registration.get('password')
  }

  constructor(private userdata:UserdataService){}
  submit()
  {
    // console.log(this.Registration.value)
    this.userdata.postdata(this.Registration.value).subscribe((result)=>
    {
      console.warn(result);
    });
  }
}
