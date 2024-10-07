 class Also_Not_A_House {
    // Notice how the properties are private // 
    private doors: number;
    private windows: number;

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

let bathroom = new Also_Not_A_House(1,1);

// This gives an error as we are trying to acess a private property directly //

// Instead we should be acessing it indirectly through methods //

 // console.log(bathroom.doors) //

 console.log(bathroom.getDoors());
