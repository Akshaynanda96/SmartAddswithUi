import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  public completed: boolean = false;

  component(val:boolean){
      this.completed = val
  }

  getCompleted(){
    return this.completed
  }

}
