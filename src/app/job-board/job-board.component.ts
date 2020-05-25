import { Component } from '@angular/core';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent  {

  doThis(): void {
    console.log('Yes');
  }

}
