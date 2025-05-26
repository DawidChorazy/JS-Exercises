document.querySelectorAll(".first-attempt")
.forEach(el => {
    el.classList.add('active');
});

document.querySelectorAll('[data-border]')
.forEach(el => {
    el.dataset.elActive = "true";
})

document.querySelectorAll('.hack')
.forEach(el =>{
    el.setAttribute('title', 'hacking');
})

document.querySelectorAll('.hijack')
.forEach(e => {
    e.removeAttribute('title');
})

document.querySelectorAll('.st1', '.st2')
.forEach(e => {
    e.style.color = 'red';
    e.style.fontSize = '15px';
})

document.querySelectorAll('.attrib')
.forEach(el =>{
    el.setAttribute('data-hack-active', '');
    el.removeAttribute('data-hack-inactive');
})

document.querySelectorAll('.last-attempt')
.forEach(el => {
    el.style.display = 'none'
})