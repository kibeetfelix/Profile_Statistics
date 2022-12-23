const counterEl = document.querySelectorAll(".counter");



counterEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    increamentCounter()
    function increamentCounter() {
        const currentNum = +counterEl.innerText
        const dataCeil = counterEl.getAttribute("data-ceil")
    }
});