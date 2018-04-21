$(document).ready(function(){
  var storage = window.localStorage;
  var orgs = JSON.parse(storage.getItem("orgs"));
  if (!orgs)
    orgs = [];
  for (var org of orgs) {
    // org.name
    // org.phone
    // org.email
    // org.message
    console.log(org);
  }
});