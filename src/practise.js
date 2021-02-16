// import { compose, pipe } from "lodash/fp";
// console.log("Hello World!");

// const input = "    JavaScipt   ";

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("span "));
// console.log(transform(input));

// //Option 1 - Object assign
// const person = { name: "John" };
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);

// //Option 2 - Spread Operator(better option)
// const updated2 = { ...person, name: "Bob" };
// console.log(updated2);

// //Deep Copy
// const person2 = {
//   name: "John",
//   address: { country: "USA", city: "San Francisco" },
// };

// const updated3 = {
//   ...person2,
//   address: {
//     ...person2.address,
//     city: "New York",
//   },
//   name: "Bob",
// };
// console.log(person2);

// import { Map } from "immutable";

// let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   //   book.isPublished = true;
//   return book.set("isPublished", true); //it will return new object
// }

// // publish(book);
// book = publish(book);

// console.log(book.get("title"));
// console.log(book.toJS());

import { produce } from "immer";

let book = { title: "Harry Potter" };

function publish(book) {
  //   book.isPublished = true;
  return produce(book, (draftBook) => {
    //draftBook - fn that specifies our mutation
    draftBook.isPublished = true;
  });
}

let updated4 = publish(book);

console.log(book);
console.log(updated4);
