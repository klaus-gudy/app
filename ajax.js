const json_div =  document.querySelector("#json");
const data_div =  document.querySelector(".output");
// const data_div =  document.createElement("div");
// data_div.setAttribute('id', 'data');
const detail = document.createElement("button");
detail.className = 'mt-4 btn btn-dark';
detail.innerText = 'detail';
json_div.appendChild(detail);
// json_div.appendChild(data_div);


detail.addEventListener('click', loaddetail);

function loaddetail(){
    const view = new XMLHttpRequest();

    view.open('GET', 'data.json', true);

    view.onload = function(){
        if(this.status === 200){
            const datas = JSON.parse(this.responseText);

            let output = '';

            datas.forEach(function(data){
                output += `<ul><li>id: ${data.id}</li></ul>`
            })

            data_div.innerHTML = output
        }
    }

    view.send();
}