let data = []

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

    data.forEach(element => {

        let li = document.createElement('li')

        li.innerHTML = `
        <input type="checkbox" id="task-${element.id}">
        <label for="task-${element.id}"> ${element.title}</label>
        <button class="btnExcluir" type="button">Excluir</button>
        <button class="btnEdit" type="button">Editar</button>
        `
        li.querySelector('input').addEventListener("change", e => {

            if (e.target.checked) {
                li.classList.add('complete')
            } else {
                li.classList.remove('complete')
            }
        })

        li.querySelector('button').addEventListener('click', e => {

            let del = e.target.parentNode.querySelector('input').id.split('-')[1];
            let tarefa = li.querySelector('label').innerText
            let edit = tarefa

            if (confirm(`Deseja excluir a tarefa ${tarefa}?`)) {

                data = data.filter(task => task.id !== parseInt(del))

                renderTodo()

            }

        })

        document.querySelector('.todo').append(li);
    });
}

document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key === 'Enter') {
        console.log(e.target.value)

        data.push({
            id: data.length + 1,
            title: e.target.value
        })

        e.target.value = "";

        renderTodo()
    }
})

renderTodo()