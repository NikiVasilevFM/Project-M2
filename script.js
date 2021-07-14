const buttonClick = document.querySelector('.img-button');
const textEnter = document.querySelector('.text-enter');
let multiplier = 1

function addLine () {
    const newLine = document.createElement('div');
    newLine.classList.add('task-line');
    const newInput = document.createElement('input');
    newInput.classList.add('task-input');
    const newImg = document.createElement('img');
    newImg.classList.add('img-cross');
    newImg.src="images/Group779.svg";
    newLine.append(newInput);
    newLine.append(newImg);
    textEnter.append(newLine);

    newImg.addEventListener('click', () => {
        newLine.remove();
    });
    
    newImg.addEventListener('mouseover', (event) => {
        event.target.src="images/Group709.svg";
    });
    newImg.addEventListener('mouseout', (event) => {
        event.target.src="images/Group779.svg";
    });
}

buttonClick.addEventListener('click', () => {
    addLine()
});

addLine();


const buttonSort = document.querySelector('.img-sort');

buttonSort.addEventListener('mouseover', (event) => {
    if (multiplier === -1) {
      event.target.src = "images/Group739.svg"
    } else if (multiplier === 1) {
      event.target.src = "images/Group919.svg"
    }
})
  
buttonSort.addEventListener('mouseout', (event) => {
    if (multiplier === -1) {
      event.target.src = "images/Group740.svg"
    } else if (multiplier === 1) {
      event.target.src = "images/Group909.svg"
    }
})


buttonSort.addEventListener('click', (event) => {
    if (multiplier === -1) {
        event.target.src = "images/Group919.svg"
    } else if (multiplier === 1) {
        event.target.src = "images/Group739.svg"
    }

    let arr = [];
    let taskLines = document.querySelectorAll('.task-line');
    taskLines.forEach((taskline) => {
        arr.push(taskline)
    }) 

    arr.sort((a, b) => {
        let textA = a.firstElementChild.value
        let textB = b.firstElementChild.value
        return textA.localeCompare(textB) * multiplier
    }) 

    multiplier = multiplier * -1
    arr.forEach((el) => {
        el.remove()
        textEnter.append(el)
    })
})





