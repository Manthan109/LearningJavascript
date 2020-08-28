const notes=[
    {
        title:'my next trip',
        body:'I would like to go to spain'
    },
    {
        title:'Habits to work on',
        body:'Exercise. Eating a better diet'
    },
    {
        title:'Office Modification',
        body:'get anew seat'
    }
]

//DOM manipulation

//query and remove
// const p=document.querySelector('p')
// console.log(p)
// p.remove()

//query all and remove
// const ps=document.querySelectorAll('p')

// ps.forEach(function(p){
//     p.remove()
// })

// //Add a new element
// const newPara=document.createElement('p')
// newPara.textContent="This is newly added"
// document.querySelector('body').appendChild(newPara)

// document.querySelector('button').addEventListener('click',function(e){
//     // console.log('Did this work?');
//     // console.log(e);
//     e.target.textContent="Hello";
// })

// document.querySelectorAll('button')[1].addEventListener('click',function(e){
//     console.log('Delete all notes');
// })

const filters={
    searchText:''
}

const renderText=function(notes,filters){
    const filteredNotes=notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    document.querySelector('#notes').innerHTML='';
    filteredNotes.forEach(function(note){
        const noteEl=document.createElement('p');
        noteEl.textContent=note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
    //console.log(filteredNotes);
}

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent='button clicks';
})
 
// document.querySelector('#remove-all').addEventListener('click',function(e){
//     console.log('delete all notes');
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove();
//     })
// })

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value;
    renderText(notes,filters);
    //console.log(e.target.value);
})

document.querySelector('#for-fun').addEventListener('change',function(e){
    console.log(e.target.checked)
})

// document.querySelector('#name-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value='';
// })

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value);
})