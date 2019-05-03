// Your code goes here

//About Us Link to Lambda
let aboutUS = document.querySelectorAll('nav');
let test = aboutUS[0].getElementsByTagName('a')[1];
test.addEventListener('click', function (e) {
    window.location.replace('https://lambdaschool.com/about/');
});

//ContactUs link to Lambda Apply

test = aboutUS[0].getElementsByTagName('a')[3];
test.addEventListener('click', function (e) {
    window.location.replace('https://lambdaschool.com/apply/');

})

//Home Page will link to Lambda School
test = aboutUS[0].getElementsByTagName('a')[0];
test.addEventListener('click', function (e) {
    window.location.replace('https://lambdaschool.com/');

})

test = aboutUS[0].getElementsByTagName('a')[2];
test.addEventListener('click', function (e) {
    window.location.replace('https://lambdaschool.com/blog/');

})

//Making logo change color
let logoImg = document.querySelector('.logo-heading');
console.log(logoImg);
logoImg.addEventListener('click', function (e) {
    event.preventDefault();
    if (this.style.color === 'red') {
        logoImg.style.color = 'black';
    } else {
        logoImg.style.color = 'red';
    }

})
logoImg.addEventListener('mouseover', function (e) {
    event.preventDefault();
    if (this.style.color === 'purple') {
        logoImg.style.color = 'green';
    } else {
        logoImg.style.color = 'purple';
    }
})