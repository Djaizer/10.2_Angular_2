import {Component, Input, Output} from "angular2/src/core/metadata";
import {Optional} from "angular2/src/core/di/decorators";
import {EventEmitter} from "angular2/src/facade/async";
import {OnInit} from "angular2/src/core/linker/interfaces";
/**
 * Created by MyHomePC2 on 29.11.2016.
 */

@Component({
    selector: 'pagination',
    template: `
<nav aria-label="..." *ngIf="pages > 1 && generateArr()" >

  <ul class="pagination"  >
 <li [ngClass]="{disabled: selectedPage == 1}" (click)="switch(selectedPage-1)" > <a  aria-label="Next"><span aria-hidden="true">&laquo;</span></a></li>
    <li *ngFor="#page of pagesArr" [ngClass]="{active: page == selectedPage}" (click)="switch(page)"><a >{{page}} <span class="sr-only">(current)</span></a></li>
 
 <li [ngClass]="{disabled: selectedPage == pages}" (click)="switch(selectedPage+1)" > <a   aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>



`,
    styles: [" .disabled{pointer-events: none;  cursor: not-allowed} "]
})
export class PaginationComponent  {


    @Input() pages = 0;
    pagesArr = [1];

    @Output() selectedDecade = new EventEmitter();
    selectedPage: number = 1;
    flag: boolean = true;


    constructor() {
        console.log("constructor : log pages " + this.pages);
    }


    generateArr(): boolean {
        console.log("generateArr : log pages " + this.pages);

        if(this.flag) {
            this.pagesArr = _.range(1, this.pages);
        }
        return true;
    }

    switch(page: number) {
        console.log("log pages " + this.pages);
        console.log("log page " + page);
        this.selectedPage = page;
        this.selectedDecade.emit({value: page});
    }

}