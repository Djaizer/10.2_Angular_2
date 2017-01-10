import {Component} from "angular2/core";
/**
 * Created by MyHomePC2 on 11.11.2016.
 */

@Component({
        template: `
<h1>NgProject (Home)</h1>
<nav aria-label="...">
  <ul class="pagination">
   <li><a href="#" aria-label="Next"><span aria-hidden="true">&laquo;</span></a></li>
    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
    <li class="disabled"><a href="#">2 <span class="sr-only">(current)</span></a></li>
    <li class="disabled"><a href="#">3 <span class="sr-only">(current)</span></a></li>
    <li class="disabled"><a href="#">4 <span class="sr-only">(current)</span></a></li>
 <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>
`

    }
)
export class NgProjectComponent{

}