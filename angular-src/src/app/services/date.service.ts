import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  public today: Date = new Date();
  public year = this.today.getUTCFullYear();

  public dateFields = {
    days: Array(31),
    months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
    years: Array(100)
  };

  constructor() { }

  parseDate(year,month,day){
    console.log(year,month,this.dateFields.months.indexOf(month),day);
    return new Date(year,this.dateFields.months.indexOf(month),day);
  }

  formatDate(yyyy,mm,dd) {
    mm = mm + 1; // mm is zero-based
    return [yyyy,
      (mm>9 ? '' : '0') + mm,
      (dd>9 ? '' : '0') + dd].join('');
  }

}
