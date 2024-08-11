const fname = "Max";
let age = 29;
const hobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies " +
    userHasHobby
  );
};

console.log(summarizeUser(fname, age, hobbies));
