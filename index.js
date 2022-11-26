const needs = [
    {
        id: Math.random(),
        name: 'Coffee'
    },
    {
        id: Math.random(),
        name: 'Tea'
    },
    {
        id: Math.random(),
        name: 'Milk'
    },
];

const elements = document.getElementsByClassName('needs');
const ulElement = elements[0];
console.log(ulElement);

needs.forEach(function (need){
    const liElement = document.createElement('li');
    liElement.innerText = need.name;
    ulElement.append(liElement);
});

const buttonElement = document.getElementById('createButton');
buttonElement.onclick = function (){
    const inputs = document.getElementsByClassName('needName');
    const inputElement = inputs[0];
    console.log(inputs);

    const liElement = document.createElement('li');
    liElement.innerText = inputElement.value;
    ulElement.append(liElement);
}


