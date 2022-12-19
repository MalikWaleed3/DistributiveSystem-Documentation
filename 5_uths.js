//Modules "every file in node is module" "only share the min"

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
