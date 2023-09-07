import { Pipe, PipeTransform } from '@angular/core';
import { WorkerInterface } from '../models/model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    datas: WorkerInterface[],
    field: string,
    query: string
  ): WorkerInterface[] {
    if (!query) return datas;

    const regx = new RegExp(query, 'i');
    return datas.filter((data) => {
      if (field === 'name')
        return data.name.match(regx) || data.email.match(regx);
      if (field === 'company') return data.company.name.match(regx);
      if (field === 'designation') return data.company.designation.match(regx);
      return true;
    });
  }
}
