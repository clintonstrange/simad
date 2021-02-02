var url = `http://api.carmd.com/v3.0/year`;
var Key = "Basic NDM1ZjZjNDQtMzEzOS00M2M0LTkxYjgtMDJhZTBlZjc3MWVm";
var pToken = `f63548f0054f4c8181771bd58de472ae`;
const fetch = require("node-fetch");
const fs = require("fs");
fetch(`${url}`,{
  headers: {
    "content-type": "application/json",
    "authorization": `${Key}`,
    "partner-token": `${pToken}`,
  },
})
  .then((response) => {
      console.log(response);
    response.json();
    console.log(response.json,"json");
  })
  
