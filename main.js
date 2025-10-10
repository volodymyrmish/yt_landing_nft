// let btn = document.querySelector('#btn');
// let span = document.querySelector('.span');
// let wrapper__qanda = document.querySelector('.wrapper__qanda');

// wrapper__qanda.addEventListener('click', () => {
//     if (span.style.maxHeight === `0px`) {
//         span.style.maxHeight = span.scrollHeight + 'px'
//         wrapper__qanda.style.background = '#fff'
//         btn.style.transform = 'rotate(180deg)'
//     } else {
//         span.style.maxHeight = 0
//         wrapper__qanda.style.background = '#fcfaff'
//         btn.style.transform = 'rotate(0deg)'
//     }
// })

let wrapper__qanda = document.querySelectorAll('.wrapper__qanda');

wrapper__qanda.forEach(el => {
    el.addEventListener('click', () => {
        let span = el.childNodes[5]
        let btn = el.childNodes[3]
        let wrapper__qanda = el

        // console.log(el.childNodes)
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
})