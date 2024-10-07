// Class //
class House {
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

// Objects //
const House_1 = new House(3,10);
const House_2 = new House(4,12);

console.log(House_1.getDoors());
console.log(House_1.getWindows());














