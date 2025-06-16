// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Creation of a Promise
// promise constructor takes two parameters (resolve, reject)
const promiseOne = new Promise((resolve, reject) => {
  // after one sec the setTimeout will execute the arrow function
  setTimeout(() => {
    console.log("The Promise is loaded!");
    const someImpInfo = "*****";
    // resolve is used to connect it to the then method
    resolve(someImpInfo);
  }, 1000);
});
// then keyword used to accept data from the promise
promiseOne.then((data) => {
  console.log("The Promise is finally resolved!");
  // the date received from the promise
  console.log("The data received from the promise : ", data);
});

// When a promise is not resolved, it is rejected and that is when reject keyword is used
const promiseTwo = new Promise((resolve, reject) => {
  const error = Math.floor(Math.random() * 2);
  console.log(error); // generate random truthy and falsy value (0,1)
  setTimeout(() => {
    if (!error) {
      resolve({ email: "rijusaptadeep@gmail.com", pass: "starstarstar" });
    } else {
      reject("Error: Connection failed");
    }
  }, 1000);
});

// the then is called when there is no error
// the catch is called when there is an error
// finally will get executed in every case
promiseTwo
  .then(({ email, pass }) =>
    console.log("The email : ", email, "\nThe pass : ", pass)
  )
  .catch((error) => console.log(error))
  .finally(() => console.log("The promiseTwo is successfully executed!"));

// ALTERNATIVE
// can be handled using async await
// async can't handle errors, so we need to use try

// ASYNC AND AWAIT
/*"async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise*/

async function consumePromiseTwo() {
  try {
    const response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseTwo();

// FETCH
// using fetch with async await
async function fetchJokes() {
  try {
    const jokes = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const jokesJson = await jokes.json();
    console.log(jokesJson.type);
    console.log(jokesJson.setup);
    console.log(jokesJson.punchline);
  } catch (error) {
    console.log("Error: ", error);
  }
}
fetchJokes();

// using fetch without async, await
const url = "https://official-joke-api.appspot.com/random_joke";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.type);
    console.log(data.setup);
    console.log(data.punchLine);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
