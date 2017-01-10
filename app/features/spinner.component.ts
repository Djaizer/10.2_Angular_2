import {Component, Input} from "angular2/src/core/metadata";
/**
 * Created by MyHomePC2 on 20.11.2016.
 */

@Component({
    selector: 'spinner',
    template: `
<div *ngIf="visible">
<i class="fa fa-spinner fa-spin fa-3x" ></i>
</div>

`
})
export class SpinnerComponent {
    @Input() visible: boolean = true;
}