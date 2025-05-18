document.addEventListener("DOMContentLoaded", function () {
    // Code to execute when the DOM is parsed
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        const input = document.querySelector('#favchap');
        const list = document.querySelector('#list');
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
    });
});
