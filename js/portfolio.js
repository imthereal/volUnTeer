$(document).ready(function(){
  var storage = window.localStorage;
  var orgs = JSON.parse(storage.getItem("orgs"));
  if (!orgs)
    orgs = [];
  x = document.getElementById('jonathan')
  for (var org of orgs) {
     $("jonathan").prepend("<div class=\"col-lg-4 col-sm-6 portfolio-item\"> div class=\"card h-100\"><a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a><div class=\"card-body\"><h4 class=\"card-title\"><a href=\"#\">"+org.orgname+"</a></h4><p class=\"card-text\">"+org.message+"</p></div></div></div>");

    // org.orgname
    // org.name
    // org.phone
    // org.email
    // org.message
    console.log(org);
  }
});