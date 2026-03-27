export const pasteNote = (id, value) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'note-block';
    newDiv.id = id;

    const newInput = document.createElement('input');
    newInput.className = 'note-input'
    newInput.placeholder = 'запис';
    newInput.value = value ?? '';
    newDiv.appendChild(newInput);

    const newButton = document.createElement('button');
    newButton.className = 'copy';
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'
    newDiv.appendChild(newButton);
    
    const newDelButton = document.createElement('button');
    newDelButton.className = 'delete';
    newDelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
    newDiv.appendChild(newDelButton);

    return newDiv;
}