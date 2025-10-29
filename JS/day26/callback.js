// callback function in JavaScript

// passed as an argument to another function and its execution after competion of task

// allow to asyc code

function fetchData(callback) {
  setInterval (function() {
    const data = { name: "Ram Sharma", town: "Jaipur", state: "Rajasthan" };
    callback(data); //execute the callback function with the data
  }, 2000);

  console.log("Hello World");
  console.log("Hello World JS Course");
}

function displayData(data) {
  console.log("data recevied: ", data);
}


// call the fetchdata function with the displaydata callback
fetchData(displayData);
