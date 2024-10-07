// Polymorphism is a feature of OOP that allows you to give multiple different arguments to the output of one function //

abstract class Phone {
    typing() {
        console.log("Typing on the screen right now!");
    }
}

class Iphone extends Phone {
    typing() {
        console.log("Typing on my Iphone screen right now!");
    }
}

class Android extends Phone {
    typing() {
        console.log("Typing on my Android screen right now!")
    }
}

// Makes it so that the function will take a method from any of the three classes //
function check_if_typing(phone:Phone): void {
    phone.typing()

}

// Creating instances of each subclass //
let myIphone = new Iphone();
let myAndroid = new Android();

console.log(check_if_typing(myIphone));  // Typing on my Iphone screen right now! //
console.log(check_if_typing(myAndroid)); // Typing on my Android screen right now! //