function load() {
    let ninput = document.getElementById('ninput');
    let range = document.getElementById('slidebar');

    ninput.addEventListener('input', () => {
        range.value = ninput.value;
        generate()
    });

    range.addEventListener('input', () => {
        ninput.value = range.value;
        generate()
    });

    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            let checked = document.querySelectorAll("input[type='checkbox']:checked").length;
            if (checked == 0) {
                alert('Please select at least one option')
                checkbox.checked = true;
            } else {
                generate();
            }
        });
    });
    generate()
}

function generate() {
    let password = '';
    let passwordCharacters = '';
    let resultInput = document.getElementById('resultinput');
    let length = document.getElementById('ninput').value;
    if (length > 50 || length < 1) return alert('Password length must be between 1 and 50 characters')
    let upperCase = document.getElementById('upper').checked;
    let lowerCase = document.getElementById('lower').checked;
    let numbers = document.getElementById('numbers').checked;
    let symbols = document.getElementById('symbols').checked;
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharacters = '0123456789';
    const symbolCharacters = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?';

    if (upperCase) passwordCharacters += upperCaseCharacters;
    if (lowerCase) passwordCharacters += lowerCaseCharacters;
    if (numbers) passwordCharacters += numberCharacters;
    if (symbols) passwordCharacters += symbolCharacters;

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[randomIndex];
    }
    resultInput.value = password;
}

function copy() {
    let resultInputContent = document.getElementById('resultinput').value;
    try {
    navigator.clipboard.writeText(resultInputContent)
    alert('Password copied to the clipboard')
    } catch (error) {
        alert('Failed to copy password to clipboard. Try checking permissions or copy manually')
        }
    });
}
