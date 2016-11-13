import {Control, ControlGroup} from "angular2/src/common/forms/model";
import {Validators} from "angular2/src/common/forms/validators";
/**
 * Created by MyHomePC2 on 13.11.2016.
 */

export class CustomValidators {

    static mailFormat(control: Control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return  EMAIL_REGEXP.test(control.value)? null: {mailFormat: true};
    }
}