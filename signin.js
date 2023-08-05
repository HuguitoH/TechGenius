const signUplink = document.getElementById('signUp')
const signInlink = document.getElementById('signIn')
const container = document.getElementById('container')

signUplink.addEventListener('click', () => {
    container.classList.add("right-panel-active")
})

signInlink.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
})