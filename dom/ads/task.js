const advList = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
    index = advList.findIndex(item => item.className.includes("rotator__case_active"))
    advList[index].classList.remove("rotator__case_active")
    
    index++

    if (index === advList.length){index = 0}
    advList[index].classList.add("rotator__case_active")

}, 1000)