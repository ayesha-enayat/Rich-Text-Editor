document.querySelector('.content').addEventListener('input', function() {
    if (this.innerHTML.trim() === '') {
        this.classList.add('empty');
    } else {
        this.classList.remove('empty');
    }
});

