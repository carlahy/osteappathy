import { Injectable }      from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BookingService {

  // Observable string sources
  private onNewEvent = <BehaviorSubject<boolean>> new BehaviorSubject(true);

  // Observable string streams
  onNewEvent$ = this.onNewEvent.asObservable();

  constructor() { }

  successNewEvent() {
    this.onNewEvent.next(true);
  }

}
