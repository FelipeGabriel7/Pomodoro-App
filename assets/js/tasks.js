const tasks = document.querySelector(`.tasks`);
const iptnTask = document.querySelector(`.iptn-task`);
const btnTask = document.querySelector(`.btn-task`);
const btnModal = document.querySelector(`.btn-task-modal`);
const todo = document.querySelector(`.todo`);
const deleteT = document.querySelector(`.delete`);

btnTask.addEventListener(`click`, addItem);

function addItem() {

    if (iptnTask.value === '') {
        return alert(` Informe um valor valido `)
    }

    const ul = document.createElement(`ul`);
    const li = document.createElement(`li`);
    const btn = document.createElement(`button`);

    btn.textContent = `X`
    btn.classList.add(`delete`)
    li.classList.add(`taskItem`)
    li.innerHTML = iptnTask.value;

    li.appendChild(btn)
    ul.appendChild(li)
    tasks.appendChild(ul)

    iptnTask.value = ''

    removeTask(li , btn)
}

function removeTask(li , btn) {
    
    btn.addEventListener(`click`, () => {
        li.remove()
    })
}

const container = document.querySelector(`.container-todo`);
const btn = document.querySelector(`.add-btn-task`);

btn.addEventListener(`click`, tasksVisible)

function tasksVisible() {
    container.classList.toggle(`visible`)
}
