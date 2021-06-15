enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefined
}

interface IPerson {
    Category: PersonCategory;
    canSing(): boolean;
    printDetail(): void;
}

abstract class Person implements IPerson {
    private _dateOfBirth: Date;
    Category: PersonCategory;
    constructor(dateOfBirth: Date) {
        this._dateOfBirth = dateOfBirth;
        this.Category = PersonCategory.Undefined;
    };
    abstract canSing(): boolean;
    printDetail(): void {
        console.log(this._dateOfBirth);
        console.log(PersonCategory[this.Category]);
        console.log(this.canSing());
    }
}

class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    };
    canSing(): boolean {
        return false;
    }
}

class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    };
    canSing(): boolean {
        return false;
    }
}

class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    };
    canSing(): boolean {
        return true;
    }
}

class PersonFactory {
    getPerson(dateOfBirth: Date): IPerson {
        let dateNow = new Date();
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();
        let dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        let date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    }
};

let factory = new PersonFactory();
let p1 = factory.getPerson(new Date(2017, 0, 20));
p1.printDetail();
let p2 = factory.getPerson(new Date(2010, 0, 20));
p2.printDetail();
let p3 = factory.getPerson(new Date(1969, 0, 20));
p3.printDetail();