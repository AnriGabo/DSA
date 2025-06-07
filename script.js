
// class Person {
//   constructor(walk, run) {
//     (this.walk = walk), (this.run = run);
//   }

//   isPersonWalking() {
//     console.log(`ანრიკომ გაიარა ${this.walk} კილომეტრი`);
//     console.log(`ანრიკომ შემდეგ გაირბინა ${this.run} კილომეტრი`);
//   }
// }

// // ობიექტების შექმნა
// const newPerson = new Person(10, 20);
// newPerson.isPersonWalking();

// // Inheritance
// // რა არის inheritance? მემკვიდრეობა, როცა ერთი კლასი იღებს მეორე კლასის ძალას დამეორეკლასში არსებულ კონსტრუქტორებს და ყველა
// // ფრის გამოყენაბა ხდება შესაძლებელი

// class Playing extends Person {
//   constructor(walk, run, eating) {
//     super(walk, run);
//     this.eating = eating;
//   }

//   isRunningYet() {
//     console.log(`Km ${this.walk}`);
//     console.log(`km ${this.run}`);
//     console.log(`he eating ${this.eating}`);
//   }
// }

// const playingPerson = new Playing(10, 20, "Chicken");
// playingPerson.isRunningYet();
