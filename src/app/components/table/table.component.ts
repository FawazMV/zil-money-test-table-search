import { KeyValue } from '@angular/common';
import { ArrayType } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { UserModelInterface } from 'src/app/models/user.model';

@Component({
  selector: 'table-tbody',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('tableData') tableData:{tableData:Array<Object>, schema:Array<any>, style?:{row?:{highlight?:Function}, item:{bold:Array<string>, small:Array<string>}}} = {tableData:[], schema:[]}
  orderOriginal = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0
  }
  typeOfEl(data:any){
    console.log(typeof data,data);
    return typeof data
  }
  asString(data:any):string{
    return data as string
  }
  findData(data:Object, key:string):string{
    let path = key.split('.');
    let curr:any = data;
    for (const i in path) {
      curr = curr[(path[i] as string)]
    }
    return curr;
  }

  style_rowValidate(data:Object):boolean{
    if(this.tableData.style?.row?.highlight){
      for (const obj of this.tableData.schema) {
        for (const key of Object.keys(obj)) {
          if(this.tableData.style?.row?.highlight(this.findData(data ,key))){
            return true;
          }
        }
      }
    }
    return false; 
  }

  elStyle(data:string, path:string):string{
    let tag = 'p'
    if(this.tableData?.style?.item.bold.includes(path)){
      tag = 'b'
    }else if(this.tableData?.style?.item.small.includes(path)){
      tag = 'small'
    }
    return `<${tag}>${data}</${tag}>`
  }
}



/* 


*/