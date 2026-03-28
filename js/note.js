export const pasteNote = (id, value, label) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'note-block';
    newDiv.id = id;

    const newLabel = document.createElement('label');
    newLabel.className = 'note-label'
    newLabel.textContent = label || `запис  #${id}`;
    newDiv.appendChild(newLabel);

    const newActionBlock = document.createElement('div');
    newActionBlock.className = 'action-block';
    newDiv.appendChild(newActionBlock);

    const newInput = document.createElement('input');
    newInput.className = 'note-input'
    newInput.placeholder = 'запис';
    newInput.value = value ?? '';
    newActionBlock.appendChild(newInput);
    
    const newButtonBlock = document.createElement('div');
    newButtonBlock.className = 'button-block';
    newActionBlock.appendChild(newButtonBlock);

    const newButton = document.createElement('button');
    newButton.className = 'copy';
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'
    newButtonBlock.appendChild(newButton);

    const newEditButton = document.createElement('button');
    newEditButton.className = 'edit';
    newEditButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'
    newButtonBlock.appendChild(newEditButton);
    
    const newDelButton = document.createElement('button');
    newDelButton.className = 'delete';
    newDelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
    newButtonBlock.appendChild(newDelButton);

    return newDiv;
}