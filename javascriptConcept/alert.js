//The Window alert() method displays an alert box containing text and an OK button.

alert('please do not distrub!!!!');
window.alert('please do not distrub!!!!');

//Object
const user = { name: 'John', age: 36 };
//alert(user);
// Expected text message: [object Object]
alert(JSON.stringify(user));
// Expected text message: {"name":"John","age":36}

//Note: the default behavior of applying the toString() method to an object returns [object, object] as the converted string. To avoid this behavior, use JSON.stringify() or a for…in statement to convert the object to the desired string.
//For example, the following is the text message returned for the above user object when using JSON.stringify():

