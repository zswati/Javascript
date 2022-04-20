var my_email = "useridhere@sitename.com"

var ind = my_email.indexOf("@");

var my_slice = my_email.slice(0, ind);

console.log(my_slice);

var my_email = "useridhere@sitename.com"

var ind = my_email.indexOf("@");

var my_slice = my_email.slice((ind + 1), my_email.length);

console.log(my_slice);

var my_email = "useridhere@sitename.com"

var ind = my_email.indexOf("@");

var my_slice = my_email.substr((ind + 1));

console.log(my_slice);
