import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../Services/worker.service';
import { WorkerInterface } from '../models/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  workersData!: Observable<WorkerInterface[]>;
  name=''
  company=''
  designation=''

  constructor(private service: WorkerService) {}
  ngOnInit(): void {
    this.workersData = this.getData();
  }


  getData() {
    return this.service.getData();
  }
}
