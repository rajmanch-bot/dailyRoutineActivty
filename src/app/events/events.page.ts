import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


 routineData = {
    routineName: '',
    startDate: '',
    startTime: '',
    endDate: '',
    repeat: '',
    comments: '',
    addNotifiCheck: ''

  };

saveRoutine(){
  window.localStorage.setItem('routineForm', JSON.stringify(this.routineData));
  console.log("test data moved"+JSON.stringify(this.routineData));
  this.router.navigate(['/routine']);

  }
}
