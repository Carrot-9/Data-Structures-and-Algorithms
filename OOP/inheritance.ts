// Template for more specific classes to inherit from. You can not make instances of an abstract class //
abstract class Not_A_House {
    doors: number;
    windows: number;

    // Constructor //
    constructor(doors: number, windows: number) {
        this.doors = doors;
        this.windows = windows;
    }
        // Methods //
        getDoors(): number {
            return this.doors;
        }

        getWindows(): number {
            return this.windows;
        }

}

// Inherited from the abstract class //

// In typescript, a subclass can not inherit from more than one super class //

class Bedrooms extends Not_A_House {
    beds: number;

    constructor(beds: number, windows: number, doors: number) {
        // calls properties from base class //
        super(windows, doors);
        this.beds = beds;
    }

    // You can override previous methods //
    getWindows(): number {
        return this.windows + 1;

    }

}

let bedroom_windows = new Bedrooms(5,6,4);
console.log(bedroom_windows.getWindows());

