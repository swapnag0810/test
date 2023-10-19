import { Component , Input, OnInit} from '@angular/core';
import { RESTAPIService } from '../restapi.service';
import { User } from '../productmodel';
import { Observable } from 'rxjs';

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
  subscriptionsub: any;
  constructor(private restAPIService: RESTAPIService) { }

  ngOnInit(): void {
    debugger;
    //try calling local storage
    alert(localStorage.getItem('name'));
    //try retriving data from third party
    this.getHolidays();
    //try obeservable and promise
    this.callPromiseObservableEx();

  }
  callPromiseObservableEx()
  {
    var tryobservable = new Observable(res => {
        res.next("Hello obs test1");
        res.next("Hello obs test2");
        res.next("Hello obs test3");
        res.next("Hello obs test4");
    });
    tryobservable.subscribe(console.log);
    //Output will be , Observable will return multiple values
  
    var trypromise = new Promise(res => {
        res("Hello promise test5");
        res("Hello promise test6");
        res("Hello promise test7");
    });
    trypromise.then(console.log);
    //output
    //Hello test5 --> Promise will return only single values that's why other two values are not returned.


    //lazy loading example
    var observable = new Observable(res => {
        res.next("Hello lazy loading");
    });
    observable.subscribe(console.log) //Whenever subscribe observable then only it will emmit values beacuse it is lazy load.
    //Output
    //Hello lazy loading....
    var promise = new Promise(res => {
        console.log("Promise start executing..."); //In console can see this output before calling promise it will initialized on creation and eagerly load.
        res("Hello eager load promise....");
    });
    //Call promise
    promise.then(console.log);
    //Output
    //Promise start executing...
    //Hello eager load promise....

      
    //Async Promise
      var promise = new Promise(res => {
        console.log("Start Executing async promise...");
        res("Hello asyn promise...");
        console.log("Execution End...");
      });
      promise.then(console.log);
      //Output
      //Start Executing async promise...
      //Execution End...
      //Hello asyn promise...

      //Async Observable
      var observable = new Observable(res => {
        console.log("Start Executing...");
        setTimeout(() => {
            res.next("Hello test10");
            res.next("Hello test11");
            res.next("Hello test12");
        }), 1000
        console.log("Execution End...");
      });
      observable.subscribe(console.log)
      //Output
      //Start Executing...
      //Execution End...
      //Hello test10
      //Hello test11
      //Hello test12
      //Sync Observable
      var observable = new Observable(res => {
        console.log("Start Executing...");
        res.next("Hello test13");
        res.next("Hello test14");
        res.next("Hello test15");
        console.log("Execution End...");
      });
      observable.subscribe(console.log)
      //Output
      //Start Executing...
      //Hello test13
      //Hello test14
      //Hello test15
      //Execution End...

      //scenario to unsubscribe the observable just in case it keeps on running and runs into memory issue
      //observable
      const observablesub = new Observable((res) => {
        let count = 0;
        setInterval(() => {
            count = count + 1;
            res.next(count);
        }, 1000)
      })
      //subscribe the observable
      
        this.subscriptionsub = observablesub.subscribe(ele => {
          console.log(ele)
        })
        //unsubscribe the observable
        setTimeout(() => {
          this.subscriptionsub?.unsubscribe();
        }, 12000)
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
