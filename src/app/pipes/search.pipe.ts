import { Pipe, PipeTransform } from '@angular/core';
import { UserModelInterface } from '../models/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(searchData: Array<UserModelInterface>, searchParams: {onField:string, query:string}): UserModelInterface[] {
    return searchData.filter((obj)=>{
      let currData:string|Object = searchParams.onField.split('.').reduce((acc, key) => {
        return acc[key];
      }, obj);
      // for (const iterator of searchParams.onField.split('.')) {
      //   currData = currData[iterator]
      // }
      if(typeof currData == 'string'){
        const regex = new RegExp(searchParams.query, "gi"); 
        currData=currData.replace(/<span[^>]*>([^<]*)<\/span>/g, '$1')
        if(regex.test(currData as string)){
          currData=(currData as string).replaceAll(regex, '<span>$&</span>');
          this.updateString(obj, searchParams.onField, currData as string)
          return true;
        }
      }
      return false;
    })
  }

  // updateString_old(obj:obj_type, pathParams:string, newString:string){
  //   for (const iterator of pathParams.split('.')) {
  //     let currData = obj;
  //     if(typeof currData[iterator] == 'string'){
  //       currData[iterator] = newString
  //       console.log(currData[iterator]);
  //     }else{
  //       currData = currData[iterator]
  //     }
  //   }
  // }
  updateString(obj: obj_type, pathParams: string, newString: string) {
    const keys = pathParams.split('.');
    let currData = obj;
  
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (typeof currData[key] !== 'object') {
        return; //err
      }
      currData = currData[key];
    }
  
    const lastKey = keys.pop(); 
    if (typeof lastKey === 'string' && typeof currData[lastKey] === 'string') {
      currData[lastKey] = newString;
    }
  }
}

interface obj_type {
  [propName: string]: any
}