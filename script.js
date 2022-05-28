const inputEl = document.querySelector('.todo')
const addBtn = document.querySelector('.add')
const listEl = document.querySelector('.todo-list')


addBtn.addEventListener('click',()=>{
    if (inputEl.value === '') {
        return ''
    } else {
        getInputValue()
        inputEl.value = ''
    }
    
})

function getInputValue(){
    const input = inputEl.value

    const item = document.createElement('li')
    item.classList.add('item')
    item.innerHTML = `
    <span>${input}</span>
    <input type="checkbox" class="done">
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    `
    listEl.appendChild(item)

    const deleteBtn = document.querySelectorAll('.delete')

    deleteBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            btn.parentNode.remove()
        })
    } )
}

