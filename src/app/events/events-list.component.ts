import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './events-list.component.html',
})
export class EventListComponent {
  event = {
    id: 1,
    name: 'Angular Mentoring',
    date: '6/24/2020',
    time: '10:00 am',
    price: 499.99,
    image: 'assets/images/angularconnect-shield.png',
    location: {
      address: '135 Krasnaya',
      city: 'Krasnodar',
      country: 'Russia',
    },
  };
}
