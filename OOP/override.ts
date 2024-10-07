// Overriding is a feature of OOP that allows the method of a subclass to replace or "override" that of a superclass //

// You dont need the override keyword to do this but it makes your intentions clearer // 

 class Not_Birds {
    feathers: number;
    
        constructor( feathers: number) {
            this.feathers = feathers;

        }

        CountFeathers(feathers: number) {
            if(feathers < 100) {
                console.log("You're practically naked!")
            }
        }

}

class Not_Penguin extends Not_Birds {
    swim_speed: number;

        constructor(swim_speed: number, feathers:number) {
            super(feathers)
            this.swim_speed = swim_speed;

        }

        override CountFeathers(feathers:number) {
            while(feathers < 100) {
                feathers++;
                console.log(feathers);
            }
        }
}

let Jane_the_Penguin = new Not_Penguin(25,50);

console.log(Jane_the_Penguin.CountFeathers(50)); 