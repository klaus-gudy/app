const get = document.querySelector("#ajax");
const button1 = document.createElement("button");
button1.className = " mt-4 btn btn-warning";
button1.innerText = "recommandation";
get.appendChild(button1)

button1.addEventListener('click', loadData);

function loadData(){
    const xhr =  new XMLHttpRequest();

    xhr.open('GET', "other.txt", true);

    // xhr.onprogress = function(){} 
    // fro a spinner when some information is fetched

    xhr.onload = function(){
        if(this.status === 200){
            const output = document.createElement("div");
            output.className = 'output';
            output.innerHTML = `<h1>${this.responseText}</h1>`
            get.appendChild(output);
        }
    }

    // not necessary but if somthing goes wrong
    xhr.onerror = function(){
        alert("request error");
    }

    xhr.send();
    
}