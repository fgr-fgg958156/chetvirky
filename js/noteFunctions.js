import { pasteNote } from "./note.js";

const noteContainer = document.querySelector('.note-container');
const addButton = document.querySelector('.add');

const dataName = 'dataNotes';

const notes = JSON.parse(localStorage.getItem(dataName)) ?? {
    noteBlocks: []
}

function load() {
    notes.noteBlocks.forEach((value, index) => {
        noteContainer.appendChild(pasteNote(index, value));
    });
}

load();

function updateLS() {
    localStorage.setItem(dataName, JSON.stringify(notes));
}

addButton.addEventListener('click', ()=>{
    notes.noteBlocks.push('');
    noteContainer.appendChild(pasteNote(notes.noteBlocks.length - 1));
    updateLS();
});

noteContainer.addEventListener('input', (e) => {
    if(!e.target.classList.contains('note-input')) return;

    const noteId = +e.target.closest('.note-block').id;

    notes.noteBlocks[noteId] = e.target.value;
    updateLS();
    console.table(notes);
});

noteContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.copy');
    if (!button) return;

    const noteValue = button.parentElement.querySelector('input').value;

    navigator.clipboard.writeText(noteValue)
            .then(() => {
                console.log('відтворив:', noteValue);
            })
            .catch(error => {
                console.error('Помилка відтворювання:', error);
            });
});

noteContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.delete');
    if (!button) return;

    const noteId = +button.parentElement.id;

    notes.noteBlocks.splice(noteId, 1); 
    updateLS();

    noteContainer.innerHTML = '';
    load();
});