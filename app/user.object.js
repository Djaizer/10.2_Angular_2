System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User, Address;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by MyHomePC2 on 20.11.2016.
             */
            User = (function () {
                function User() {
                    this.address = new Address();
                }
                User.prototype.toString = function () {
                    return "{  id: " + this.id + "," +
                        "name: " + this.name + "," +
                        "phone: " + this.phone + "," +
                        "email: " + this.email + "," +
                        "address: {" +
                        "street: " + this.address.street + "," +
                        "suite: " + this.address.suite + "," +
                        "city: " + this.address.city + +"," +
                        "zipcode: " + this.address.zipcode + "," +
                        "}}";
                };
                return User;
            }());
            exports_1("User", User);
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
        }
    }
});
//# sourceMappingURL=user.object.js.map