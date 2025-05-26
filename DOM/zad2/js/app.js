document.querySelectorAll('.nav li')
.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        const activeEl = document.querySelector('.nav-el-active');
        activeEl.classList.remove('nav-el-active')
        el.classList.add('nav-el-active');
    
    });
})