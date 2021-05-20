const addButton = document.getElementById('add');

const updateLSData = () => {
    const textArea = document.querySelectorAll('textarea');

    const notes=[];
    console.log(textArea);

    textArea.forEach((note)=>{
        return notes.push(note.value);
    })

    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNote = (text ='') => {

    const note = document.createElement('div');

    note.classList.add('note');

    const htmlData = `
    <div class="operation">
            <div class="edit"><i class="fas fa-edit"></i></div>
        <div class="trash"><i class="fas fa-trash"></i></div>
        
        </div>
        <div class="main ${(text ?  '' : 'hidden') }" ></div>
        <textarea class="${(text ? 'hidden' : '') }"></textarea>

        

      
    `
    note.insertAdjacentHTML('afterbegin',htmlData)

    console.log(note);

//getting references
     const deleteButton = note.querySelector('.trash');
     const addtxtButton = note.querySelector('.edit');
     const txtArea = note.querySelector('textarea');
     const main = note.querySelector('.main');

     //delete button

     deleteButton.addEventListener('click',()=>{
         note.remove();
         updateLSData();
     });

     txtArea.value =text;
     main.innerHTML  = text;

     addtxtButton.addEventListener('click',()=>{
         main.classList.toggle('hidden');
         txtArea.classList.toggle('hidden');
     })

     txtArea.addEventListener('change',(event)=>{
         const value = event.target.value;
         main.innerHTML= `${value}`;
         updateLSData();

     })






    document.body.appendChild(note);


}


//getting data back from ls

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=>addNote(note));
}


addButton.addEventListener('click',()=> addNote());