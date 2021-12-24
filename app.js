const container_div = document.getElementsByClassName('container');

const h1_header = document.createElement('h1');
h1_header.className = 'p-4';
h1_header.innerText = 'javascript app';

const hr = document.createElement('hr');

const card_div = document.createElement('div');
card_div.className = 'card';

const h2 = document.createElement('h2');
h2.className = 'py-2';

const form = document.createElement('form');
form.className = 'd-flex justify-content-xl-center';

const form_div = document.createElement('div');
form_div.className = 'form-group p-2';

const text_input = document.createElement('input');
text_input.className = 'val';
text_input.setAttribute('type','text');
text_input.setAttribute('placeholder', 'enter a book name');

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.setAttribute('id', 'submit');
button.setAttribute('type', 'submit');

const unli = document.createElement('ul');
unli.className = 'list-group';

const li = document.createElement('li');
li.className = 'list-group-item d-flex justify-content-between align-items-center'

const span = document.createElement('span');
span.innerHTML = '<i class="fas fa-trash"></i>';

// appendings
li.appendChild(span)

container_div.append(h1_header);