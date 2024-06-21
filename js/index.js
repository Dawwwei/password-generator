function load() {
    let ninput = document.getElementById('ninput');
    let range = document.getElementById('slidebar');

    ninput.addEventListener('input', () => {
        range.value = ninput.value;
    });

    range.addEventListener('input', () => {
        ninput.value = range.value;
    });
}