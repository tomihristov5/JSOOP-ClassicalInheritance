//Create a function constructor for Person. Each Person must have:
//    properties firstname, lastname and age
//        firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
//        age must always be a number in the range (0, 150), inclusive
//    the setter of age can receive a convertible-to-number value
//    if any of the above is not met, throw Error
//    property fullname
//    the getter returns a string in the format 'FIRST_NAME LAST_NAME'
//    the setter receives a string is the format 'FIRST_NAME LAST_NAME'
//    it must parse it and set firstname and lastname
//    method introduce() that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
//    all methods and properties must be attached to the prototype of the Person

function solve() {
    var Person = (function () {
        function validateName(name) {
            if (!/^[A-Za-z]{3,20}$/.test(name)) {
                throw new Error('First and last name must contain only latin letters and be no less than 3 sybmols and no more than 20');
            }
        }

        function validateAge(age) {
            if (age < 0 || age > 150 || age.toString() === '' || age != Number(age)) {
                throw new Error('Age must be a valid number and between 0 and 150');
            }

            age = +age;
        }

        function Person(firstname, lastname, age) {
            var _firstname, _lastname, _age;
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        Person.prototype.introduce = function introduce() {
            return 'Hello! My name is ' + this.firstname + ' ' + this.lastname +
                ' and I am ' + this.age + '-years-old';
        };

        Object.defineProperty(Person.prototype, 'firstname',
            {
                get: function () {
                    return this._firstname;
                },
                set: function (value) {
                    validateName(value);
                    this._firstname = value;
                }
            });

        Object.defineProperty(Person.prototype, 'lastname',
            {
                get: function () {
                    return this._lastname;
                },
                set: function (value) {
                    validateName(value);
                    this._lastname = value;
                }
            });

        Object.defineProperty(Person.prototype, 'age',
            {
                get: function () {
                    return this._age;
                },
                set: function (value) {
                    validateAge(value);
                    this._age = value;
                }
            });

        Object.defineProperty(Person.prototype, 'fullname',
            {
                get: function () {
                    return this._firstname + ' ' + this._lastname;
                },
                set: function (value) {
                    var name = value.split(' ');
                    this._firstname = name[0];
                    this._lastname = name[1];
                }
            });

        return Person;
    }());

    return Person;
}