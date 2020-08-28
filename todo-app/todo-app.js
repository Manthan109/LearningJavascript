const todos = [
    {
        title: 'order cat food',
        completed: false
    },
    {
        title: 'Buy food',
        completed: true
    },
    {
        title: 'Do work',
        completed: false
    },
    {
        title: 'Exercise',
        completed: true
    }
]

// document.querySelector('button').addEventListener('click',function(){
//     console.log("New Task Added");
// })

const filters = {
    searchText: '',
    hideCheck: false
}

const renderText = function (todos, filters) {
    let filteredTodo = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    console.log(filteredTodo)
    document.querySelector('#todo-list').innerHTML = '';

    filteredTodo=filteredTodo.filter(function(todo){
        if(filters.hideCheck){
            return !todo.completed
        }else{
            return true;
        }
    })

    filteredTodo.forEach(function (todo) {
        const doc = document.createElement('p')
        doc.textContent = todo.title
        document.querySelector('#todo-list').appendChild(doc)
    })
}

// document.querySelector('#add-tasks').addEventListener('click',function(){
//     console.log("New Task Added");
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderText(todos, filters);
    // console.log(e.target.value);
})

const ps = document.querySelectorAll('p');
ps.forEach((value) => value.textContent.indexOf('the') != -1 ? value.remove() : console.log(value)
)

const incompleteTask = todos.filter(function (todo) {
    return !todo.completed
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({ title: e.target.todo.value, completed: false });
    renderText(todos, filters);
    e.target.todo.value = '';
    console.log(todos);
})

document.querySelector('#is-completed').addEventListener('change', function (e) {
    filters.hideCheck = e.target.checked;
    renderText(todos, filters);
})



// const summary=document.createElement('h3')
// summary.textContent=`You have ${incompleteTask.length} incompleted tasks`
// document.querySelector('body').appendChild(summary) 

// todos.forEach(function(todo){
//     const ps=document.createElement('p')
//     ps.textContent=todo.title
//     document.querySelector('body').appendChild(ps)
// })