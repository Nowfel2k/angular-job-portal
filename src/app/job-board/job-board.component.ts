import { Component } from '@angular/core';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent  {

  news = [
    "51 Students recruited from XYZ College",
    "Django developers enjoy the biggest salary hike",
    "New Job Openings 2020 Posted Now!"
  ]

}
