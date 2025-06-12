document.addEventListener("DOMContentLoaded", function () {
    // Code to execute when the DOM is parsed
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        const input = document.querySelector('#favchap');
        const list = document.querySelector('#list');
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');


        if (input.value.trim() !== '') {
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });
        }
    });
});
const input = document.querySelector(`#favchap`);
const button = DocumentFragment.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    diplayList(chapter);
});