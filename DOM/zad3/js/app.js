document.querySelectorAll('.tab-link')
.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        const activeEl = document.querySelector(".tab-el.tab-el-active");
        activeEl.classList.remove("tab-el-active");
        el.parentElement.classList.add("tab-el-active");

        const targetHref = el.getAttribute("href").substring(1);

        document.querySelectorAll(".tab-content")
        .forEach(el => {
        el.classList.remove("tab-content-active");
        })
        const targetContent = document.getElementById(targetHref);
        if(targetContent){
            targetContent.classList.add("tab-content-active");
        }
    })
    
})

