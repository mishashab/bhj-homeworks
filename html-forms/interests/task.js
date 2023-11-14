const checkBoxes = document.querySelectorAll('.interest__check')
// Свойства checked и indeterminate
// Методы closest, querySelector и querySelectorAll
// Рекурсия (для повышенной сложности)

checkBoxes.forEach(item => 
    item.onclick = () => {
        let state = item.checked
        upCheck(item);
        // downCheck(item, state);
    })


function downCheck(item, state) {

    console.log(item.closest('.interest'))
}


function upCheck(item, state) {
    const ulParent = item.closest('.interests_active');
    console.log(ulParent)
    if(ulParent){
        ulParent.children
        ulParent.parentElement.querySelector('.interest__check').indeterminate = true;
        ulParent.parentElement.querySelector('.interest__check').checked = true;
        ulParent.parentElement.querySelector('.interest__check').checked = false;   
    }
}
