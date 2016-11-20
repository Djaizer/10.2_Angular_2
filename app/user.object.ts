/**
 * Created by MyHomePC2 on 20.11.2016.
 */
export class User {
    id;
    name;
    email;
    phone;
    address = new Address();

    toString(): string {
        return "{  id: " + this.id + "," +
            "name: " + this.name + "," +
            "phone: " + this.phone + "," +
            "email: " + this.email + "," +
            "address: {" +
            "street: " + this.address.street + "," +
            "suite: " + this.address.suite + "," +
            "city: " + this.address.city + +"," +
            "zipcode: " + this.address.zipcode + "," +
            "}}"
    }
}

export class Address {
    street;
    suite;
    city;
    zipcode;
}
