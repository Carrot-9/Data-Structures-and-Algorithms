// Interfaces give us a way to define special cases in our classes //

// For example, we can use an interface here to determine the birds flying ability outside of the class itself, allowing the class to focus on birds, rather than just things that can fly(which of course excludes certain birds).
interface ICanFly {
    canfly: boolean;

}

abstract class Birds implements ICanFly {
    canfly: boolean; 
    feathers: number;
    
        constructor(canfly: boolean, feathers: number) {
            this.canfly = canfly;
            this.feathers = feathers;

        }
}

class Penguin extends Birds {
    swim_speed: number;

        constructor(feathers: number, swim_speed: number) {
            super(false, feathers)
            this.swim_speed = swim_speed;

        }
        

}