const users = [
userOne = {
  userId: 1112,
  firstName: "Aster",
  lastName: "Fi",
  isActive: false,
  },
userTwo = {
  userId: 1113,
  firstName: "Who",
  lastName: "Dunnit",
  isActive: true,
  },
];

console.log(users[0].firstName)

function returnFullName(users) {
  return users.firstName + " " + users.lastName
}

function compareNumbers(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else if (num2 > num1) {
      return num2;
  }
}
