function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const complexity = document.getElementById('complexity').value;

    // Predefined character sets based on complexity
    const complexitySets = {
        low: 'abcdefghijklmnopqrstuvwxyz', // Lowercase only
        medium: 'abcdefghijklmnopqrstuvwxyz0123456789', // Lowercase + numbers
        high: 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}|', // Lowercase + numbers + symbols
    };

    // Select the appropriate character set based on the selected complexity
    let characterSet = complexitySets[complexity];

    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    // Output the generated password
    document.getElementById('password').textContent = password;
}
