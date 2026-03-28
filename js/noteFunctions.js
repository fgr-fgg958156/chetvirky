import { pasteNote } from "./note.js";

const noteContainer = document.querySelector('.note-container');
const addButton = document.querySelector('.add');

const dataName = 'dataNotes';
const notes =  dataBugChecker();

function load() {
    notes.noteBlocks.forEach(([value, label], index) => {
        noteContainer.appendChild(pasteNote(index, value, label));
    });
}

function dataBugChecker(){
    let data;

    try {
        data = JSON.parse(localStorage.getItem(dataName));
    } catch {
        data = null;
    }

    if (!data || !Array.isArray(data.noteBlocks) || data.noteBlocks.some(item => !Array.isArray(item))) {
        const clean = { noteBlocks: [] };
        localStorage.setItem(dataName, JSON.stringify(clean));
        return clean;
    }

    return data;
}

load();

function updateLS() {
    localStorage.setItem(dataName, JSON.stringify(notes));
}

addButton.addEventListener('click', ()=>{
    notes.noteBlocks.push(['', '']);
    noteContainer.appendChild(pasteNote(notes.noteBlocks.length - 1, '', ''));
    updateLS();
});

noteContainer.addEventListener('input', (e) => {
    if(!e.target.classList.contains('note-input')) return;

    const noteId = +e.target.closest('.note-block').id;

    notes.noteBlocks[noteId][0] = e.target.value;
    updateLS();
});

noteContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.copy');
    if (!button) return;

    const noteBlock = button.closest('.note-block');
    const noteValue = noteBlock.querySelector('.note-input').value;

    navigator.clipboard.writeText(noteValue)
        .then(() => console.log('Відтворив:', noteValue))
        .catch(err => console.error('Помилка:', err));
});

noteContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.delete');
    if (!button) return;

    const noteId = +e.target.closest('.note-block').id;

    notes.noteBlocks.splice(noteId, 1); 
    updateLS();

    noteContainer.innerHTML = '';
    load();
});

noteContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.edit');
    if (!button) return;

    const noteId = +e.target.closest('.note-block').id;
    const newName = prompt('Нова назва запису');
    if(newName === null) return;

    notes.noteBlocks[noteId][1] = newName;
    updateLS();

    noteContainer.innerHTML = '';
    load();
});