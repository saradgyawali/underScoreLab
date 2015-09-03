

// pets template (this is a function)
  var template = _.template($('#template').html());
  // console.log("this is the compiled template");
  // console.log(template);

// var person = {name: 'bob', age: '34'}
var animal = {species: "Human", name:'Iron Man', age: '42', image_url:"https://www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg"}

$('#add-template').click(function() {
	$('body').append(template(animal));	
})
console.log("hello world")
console.log("Mike Check");