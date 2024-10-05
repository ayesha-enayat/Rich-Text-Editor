const toolbarButtons = document.querySelectorAll('.text-editor-header button');

// Select color pickers
const textColorPicker = document.getElementById('textColorPicker');
const bgColorPicker = document.getElementById('bgColorPicker');

// Select the editable div
const editor = document.querySelector('.content');

// Function to execute commands
function execCommand(command, value = null) {
    document.execCommand(command, false, value);
    editor.focus(); // Keep focus on editor after action
}

// Add event listeners to toolbar buttons
toolbarButtons.forEach(button => {
    button.addEventListener('click', () => {
        const command = button.getAttribute('data-element');

        if (command === 'createLink') {
            let url = prompt('Enter the link URL:');
            if (url) {
                execCommand(command, url);
            }
        } else if (command === 'insertImage') {
            let imageUrl = prompt('Enter the image URL:');
            if (imageUrl) {
                execCommand(command, imageUrl);
            }
        } else {
            execCommand(command);
        }
    });
});

// Event listener for text color picker
textColorPicker.addEventListener('input', function () {
    execCommand('foreColor', this.value);
});

// Event listener for background color picker
bgColorPicker.addEventListener('input', function () {
    execCommand('hiliteColor', this.value);
});

// Placeholder handling
editor.addEventListener('input', function () {
    if (this.innerHTML.trim() === '') {
        this.classList.add('empty');
    } else {
        this.classList.remove('empty');
    }
});

// Initialize placeholder state
document.addEventListener('DOMContentLoaded', () => {
    if (editor.innerHTML.trim() === '') {
        editor.classList.add('empty');
    }
});