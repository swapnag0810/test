import { Component , Input, OnInit} from '@angular/core';
import { RESTAPIService } from '../restapi.service';
import { User } from '../productmodel';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent {
  fullname:string = '';
  dob:string = '';
  address: string = '';
  @Input()
  userData!: User;
  holidaysList: any;

  constructor(private restAPIService: RESTAPIService) { }

  ngOnInit(): void {
    this.getHolidays();
  }

  saveUserData() {
    //debugger;
    let userData = {      
      name: this.fullname,    
        dob: this.dob,     
         address: this.address    };
      //console.log(this.userData);
    this.restAPIService.addUser(userData).subscribe({
      error: (err) => { console.error(err) },
      complete: () => {  }
      //this.router.navigate(['products'])
    });
  }

  getHolidays()
  {
    this.restAPIService.getHolidays().subscribe((data: any) => {
      this.holidaysList = data;
    });
  }
}
