const checkBoxes = document.querySelectorAll('.interest__check');


checkBoxes.forEach(item => 
    item.onclick = () => {
        let state = item.checked;
        item.indeterminate = false;
        upCheck(item);

        item.closest('.interest').querySelectorAll('.interest__check').forEach((els) => {
            els.indeterminate = false;
            els.checked = state;
        })
    })


function upCheck(item) {
    const ulParent = item.closest('.interests_active');
    if(ulParent){
        const ulChildCheckBoxes = ulParent.querySelectorAll('.interest__check');
        const ulCheckBox = ulParent.parentElement.querySelector('.interest__check');

        let trueBoxes = Array.from(ulChildCheckBoxes).filter((item) => 
            item.checked === true).length;
        let inderBoxes = Array.from(ulChildCheckBoxes).filter((item) => 
            (item.checked === false && item.indeterminate === true)).length;
        let falseBoxes = Array.from(ulChildCheckBoxes).filter((item) => 
            (item.checked === false && item.indeterminate === false)).length;
        
        if (trueBoxes > 0 && inderBoxes == 0 && falseBoxes == 0){
            ulCheckBox.indeterminate = false;
            ulCheckBox.checked = true;
            
        }
        else if (trueBoxes == 0 && inderBoxes == 0 && falseBoxes > 0){
            ulCheckBox.checked = false;
            ulCheckBox.indeterminate = false;
        } else {
            ulCheckBox.checked = false;
            ulCheckBox.indeterminate = true;
        }  
        upCheck(ulParent.parentElement);
    }
}
