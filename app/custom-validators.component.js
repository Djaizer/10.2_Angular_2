System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by MyHomePC2 on 13.11.2016.
             */
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.mailFormat = function (control) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    return EMAIL_REGEXP.test(control.value) ? null : { mailFormat: true };
                };
                return CustomValidators;
            }());
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=custom-validators.component.js.map