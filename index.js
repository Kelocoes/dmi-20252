console.log("Testing!");


document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const content = document.getElementById('content');
    const changeTextBtn = document.getElementById('changeText');
    const addElementBtn = document.getElementById('addElement');
    const toggleClassBtn = document.getElementById('toggleClass');
    const itemList = document.getElementById('itemList');
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const myCheckbox = document.getElementById('myCheckbox');
    const submitFormBtn = document.getElementById('submitForm');

    console.dir({
        title,
        description,
        content,
        changeTextBtn,
        addElementBtn,
        toggleClassBtn,
        itemList,
        form,
        inputField,
        myCheckbox,
        submitFormBtn
    })

    changeTextBtn.addEventListener('click', () => {
        const textElement = document.querySelector('.text');
        textElement.textContent = 'Text Changed!';
        title.setAttribute('style', 'color: blue;');
    });

    addElementBtn.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    });

    toggleClassBtn.addEventListener('click', () => {
        console.log('Toggling class');
        content.classList.toggle('highlight');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Esto es util para evitar que el formulario se envie y recargue la pagina
        const inputText = inputField.value;
        const isChecked = myCheckbox.checked;
        alert(`Input: ${inputText}, Checked: ${isChecked}`);
    });

    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'A new paragraph!';
    content.appendChild(newParagraph);

    const firstItem = itemList.firstElementChild;
    const lastItem = itemList.lastElementChild;
    firstItem.style.fontWeight = 'bold';
    lastItem.style.color = 'red';

    const itemCount = itemList.childElementCount;
    console.log(`Number of items: ${itemCount}`);

    const itemListWidth = itemList.offsetWidth;
    const itemListHeight = itemList.offsetHeight;
    console.log(`ItemList width: ${itemListWidth}, height: ${itemListHeight}`);

    // Scroll to the bottom of the list
    itemList.scrollTo(0, itemList.scrollHeight);
});