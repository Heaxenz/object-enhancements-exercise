                      //same keys and values

// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

const createInstructor = (firstName,lastName) => ({firstName,lastName})



                    //Commputed property names

// let favoriteNumber = 42;

// const instructor = {
//   firstName: 'colt',
//   [favoriteNumber]: 'That is my favorite!'
// }

              
                  // Object Methods

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor = {
  firstName: 'Colt',
  sayHi(){
    return "HI";
  },
  sayBye(){
    return this.firstName + ' says bye!';
  }
}

//                Create Animal Function

const createAnimal = (species,verb,noise) => {
  return {
    species,[verb](){
      return noise;
    }
  }
}

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

