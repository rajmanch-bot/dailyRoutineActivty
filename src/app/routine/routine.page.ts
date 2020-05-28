import { Component, OnInit, enableProdMode } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  routineReminderData: any;
  jsoArrayObject: any = [];
  jsonArray: any = {};

  //userData = "[{ \"userName\": \"kapil\", \"startOfficeTiming\": \"9:00AM\", \"lunchTiming\": \"13:00PM\", \"snacksTiming\": \"16:00PM\"},{ \"userName\": \"Kiran\", \"startOfficeTiming\": \"9:00AM\", \"lunchTiming\": \"13:00PM\", \"snacksTiming\": \"16:00PM\"}]";



officeTiming: any;
  constructor(private localNotifications: LocalNotifications) {
    this.officeTiming = window.localStorage.getItem('officeTiming');

  }
  isDisabled = true;

simpleNotif() {

  /*var jsonArray = JSON.parse(this.userData);
  var objCount = jsonArray.length;
  for ( var x = 0; x < objCount ; x++ ) {
    var curitem = jsonArray[x];
    console.log(curitem.userName);
}*/
  this.localNotifications.schedule({
      id: 1,
      text: 'Single Local Notification',
      data: { secret: 'secret' }
    });
  }

  public single_notification() {
    //console.log('this name ' + JSON.parse(this.userData).userName);
   //console.log('tetst');
    //alert('hello');
    // Schedule a single notification
    // this.localNotifications.schedule({
    //   id: 1,
    //   text: 'Single ILocalNotification',
    //   sound: 'C://Users//P10501807//Downloads//nifaisLogo-x1.png',
    //   data: { secret: 'key_data' }
    // });
  }

multi_notification() {
    // Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Drink',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    }, {
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);
  }



delayed_notification() {
// alert('new Date().getTime()===' + new Date().getHours()+"==="+new Date().getMinutes());
if (new Date().getMinutes().toString() === this.officeTiming){

    // Schedule delayed notification
this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 36000) },
    });
  }
}

ngOnInit() {
//console.log(data.default[0]);
  this.jsoArrayObject =[
    {
      "routineName": "Drink water",
      "startDate": "9:00AM",
      "startTime": "13:00PM",
      "endDate": "16:00PM",
      "repeat": "16:00PM",
      "comments": "16:00PM",
      "addNotifiCheck": "16:00PM"
    },
    {
      "routineName": "Office time",
      "startDate": "9:00AM",
      "startTime": "13:00PM",
      "endDate": "16:00PM",
      "repeat": "16:00PM",
      "comments": "16:00PM",
      "addNotifiCheck": "16:00PM"
    }
  ];

//this.jsonArray =  window.localStorage.getItem('routineForm');
   //console.log('routine data===' + this.jsonArray);
  this.jsoArrayObject.push(JSON.parse(window.localStorage.getItem('routineForm')));
  console.log(this.jsoArrayObject);
 }




   public buttonClicked: boolean = false; //Whatever you want to initialise it as
 // public buttonClicked2: boolean = false; //Whatever you want to initialise it as

 public buttonHide: boolean = true; //Whatever you want to initialise it as

   public buttonHide2: boolean = false; //Whatever you want to initialise it as

  public editRoutineItem(){

   this.isDisabled = false;
   this.buttonHide = false;
   this.buttonHide2 = true;

  }
  public saveRoutineItem(){

    this.isDisabled = true;
    this.buttonHide = true;
    this.buttonHide2 = false;
 
   }

     /* public onButtonClick() {
  alert("Hello");
          this.buttonClicked = !this.buttonClicked;
          this.buttonHide =false;
          this.buttonHide2=false;
      }

      onSave(){
        alert("Save");
        this.buttonHide =true;
        this.buttonHide2=true;
        this.buttonClicked=false;

      }

      public onButtonClick2() {
        alert("Hello2");
                this.buttonClicked2 = !this.buttonClicked2;
                this.buttonHide =false;
                this.buttonHide2=false;
            }

            onSave2(){
              alert("Save2");
              this.buttonHide =true;
              this.buttonHide2=true;
              this.buttonClicked2=false;

            }*/


}
