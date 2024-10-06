// Class //
class House {
    doors: number;
    windows: number;
    bathrooms: number;
    bedrooms: number;
    pets: boolean;

    // Constructor //
    constructor(doors: number, windows: number, bathrooms: number, bedrooms: number, pets: boolean) {
        this.doors = doors;
        this.windows = windows;
        this.bathrooms =  bathrooms;
        this.bedrooms = bedrooms;
        this.pets = pets;
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
const House_1 = new House(3,10,2,3,true);
const House_2 = new House(4,12,3,4,false);

console.log(House_1.getDoors());
console.log(House_1.getWindows());







