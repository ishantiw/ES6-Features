
"use strict";
class Friends {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.email = email;
  }

  addFriend() {
    console.log('Friend with '+ this.firstName + 'has been added');
  }
}

class User{
  getDone() {
    console.log("user registered");
    let afriend = new Friends("Ishan", "Tiwari", "gag@jd.com");
    afriend.addFriend();
  }
}

class closeFriends extends Friends {
  constructor(firstName, lastName, email, relation) {
    super(firstName, lastName, email);
    this.relation = relation;
  }
  getRelation() {
    console.log('Name is '+this.firstName+' and I\'m you\'re '+this.relation);
  }
}

function run() {
  console.log("I'm inside");
  let user  = new User();
  user.getDone();
}
run();
let findRelation = new closeFriends('Jesus', 'christ', 'heaven@hell.com', 'father');

findRelation.getRelation();
