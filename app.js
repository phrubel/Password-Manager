const createPassword = () => {
    const symbol = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*+~?>/{}[]<';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * symbol.length);
        password += symbol.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById('password').value = password;
}
// const input =document.getElementById("input")
// const copy =() => {
//     input.select()
//     document.execCommand('copy')
// }