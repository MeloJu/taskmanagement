let input = document.getElementById("inputTarefa");
let btn = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;
function addTarefa()
{
    let valorInput = input.value;
    if((valorInput !== " ") && (valorInput !== undefined) && (valorInput !== null))
        {
            contador++;
            let novoItem = ` <div id = "${contador}" class="item">
            <div class= "icone">
                <span class="iconify" data-icon="mdi-circle-outline"></span>
            </div>
            <div onclick="marcarTarefa(${contador})" class="itemNome">
                <span>${valorInput}</span>
            </div>
            <div class="itemBotao">
                <button onclick="deletar(${contador})" class="delete">Deletar<span class="iconify" data-icon="mdi-delete"></span></button>
            </div>
        </div>`

            main.innerHTML += novoItem; 
            input.value = " ";
            input.focus();
        }

        
}


function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
  }



input.addEventListener("keyup", function (event)
{
    if(event.keyCode===13)
        {
            event.preventDefault();
            btn.click();
        }


})





