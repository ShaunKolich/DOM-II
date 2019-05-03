// Your code goes here

//About Us Link to Lambda
let aboutUS = document.querySelectorAll('nav');
let test = aboutUS[0].getElementsByTagName('a')[1];
test.addEventListener('click', function (e) {
    console.log('hello');
    window.location.replace('https://lambdaschool.com/about/');
});

//ContactUs link to Lambda Apply

test = aboutUS[0].getElementsByTagName('a')[3];
console.log(test);
test.addEventListener('click', function(e){
    console.log('hello');
    window.location.replace('https://lambdaschool.com/apply/');

})