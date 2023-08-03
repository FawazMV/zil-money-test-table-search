import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { UserModelInterface } from 'src/app/models/user.model';
import { map } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private api:ApiService) {}

  tableData:UserModelInterface[] = [];
  dataSchema =[{name:1,email:1}, {'company.name':1},{'company.designation':1}]
  searchInputs = {
    name:'', companyName:'', designation:''
  }
  ngOnInit(): void {
    this.api.getUserData().subscribe((data)=>{
     this.tableData = data
   })
  }
  checkAngularDevs(data:string):boolean{
    return data.toLowerCase().replace(/<span[^>]*>([^<]*)<\/span>/g, '$1').includes('angular developer')
  }
}
