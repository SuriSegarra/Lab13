
function createChoice(choice){
    const label = document.createElement('label');
    label.classList.add('choices');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choices';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

export default createChoice;