var colorBar = document.getElementsByClassName('right')[0];
container = document.getElementsByClassName('container');
colorBar.addEventListener('click', (event) => {
    color = event.target.getAttribute('style')
    console.log(color)
    container[0].setAttribute('style', color)
})