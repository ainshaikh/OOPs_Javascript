class Animal{
    speak(){
        console.log("Animal have different sounds!");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog says woof woof!");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat says meow meow!");
    }
}

const cat = new Cat();
const dog = new Dog();
cat.speak();
dog.speak();