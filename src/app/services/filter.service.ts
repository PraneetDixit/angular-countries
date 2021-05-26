import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filter(arr: any, region: string | null, name: string){
    let init = arr;
    if(region){
      init = this.filterByRegion(init, region);
    }
    if(name){
      init = this.filterByName(init, name);
    }
    return init;
  }

  private filterByName(arr: any, name: string){
    let diffName = name.toLowerCase();
    return arr.filter(function(item: any){
      let arrName = item.name.toLowerCase();
      if(arrName.includes(diffName)){
        return item;
      }
    });
  }

  private filterByRegion(arr: any, region: string){
    return arr.filter(function(item: any){
      if(item.region === region){
        return item;
      }
    });
  }
}
