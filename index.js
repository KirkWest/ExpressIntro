// imort the server package
const bananas = require('express');

// make as instance of the server that we can customise and run
const app = bananas();

// GET localhost:3000/
// app.get(route path, callback funciton)
app.get("/", (request, response) => {

  response.send("Hellow world, this server is bananas!");

});

// Configure the server -- happens all above this line ^^^^^^^

//  Activate the server -- happens all below this line vvvvvv

app.listen(3000, () => {
  console.log("Server is running on port: " + 3000);
});