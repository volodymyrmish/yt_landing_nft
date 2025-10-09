let btn = document.querySelector('#btn');
let span = document.querySelector('.span');
let wrapper__qanda = document.querySelector('.wrapper__qanda');

wrapper__qanda.addEventListener('click', () => {
    if (span.style.maxHeight === `0px`) {
        span.style.maxHeight = span.scrollHeight + 'px'
        wrapper__qanda.style.background = '#fff'
        btn.style.transform = 'rotate(180deg)'
    } else {
        span.style.maxHeight = 0
        wrapper__qanda.style.background = '#fcfaff'
        btn.style.transform = 'rotate(0deg)'
    }
})