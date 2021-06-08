import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css'],
})
export class PaginationBarComponent{
  @Input() total !: number;
  @Input() current: number = 0;
  @Output() pageChanged : EventEmitter<number> = new EventEmitter<number>();
  
  isFirstPage(): boolean{
    return this.current === 0;
  }

  isLastPage(): boolean{
    return this.current === (this.total-1);
  }

  prev(){
    this.emitChange(this.current-1)
  }

  next(){
    this.emitChange(this.current+1)
  }

  handleEnter(dt: any){
    dt.target.blur();
    if(dt.target.checkValidity()){
      this.emitChange(Math.ceil(dt.target.value) - 1);
    }else{
      dt.target.value = this.current+1;
    }
  }

  emitChange(page: number){
    this.pageChanged.emit(page);
  }
}