const confirmPassword = document.getElementById('confirmPassword')
const userPassword = document.getElementById('userPassword')
const error = document.getElementById('errorPassword')
const form = document.getElementById('form')
const requirements = document.getElementById('passwordRequirements')

confirmPassword.addEventListener('change', e => {
    if (userPassword.value !== confirmPassword.value) {
        userPassword.classList.add('error')
        confirmPassword.classList.add('error')
        error.style.display = 'block'
    }
    else {
        userPassword.classList.remove('error')
        confirmPassword.classList.remove('error')
        error.style.display = 'none'
    }
})

userPassword.addEventListener('change', e => {
    if (!userPassword.validity.valid) {
        requirements.style.display = 'block'
    }
    else {
        requirements.style.display = 'none'
    }
    if (!confirmPassword.value) {
        userPassword.classList.remove('error')
        confirmPassword.classList.remove('error')
        error.style.display = 'none'
    }
    else if (userPassword.value !== confirmPassword.value) {
        userPassword.classList.add('error')
        confirmPassword.classList.add('error')
        error.style.display = 'block'
    }
    else {
        userPassword.classList.remove('error')
        confirmPassword.classList.remove('error')
        error.style.display = 'none'
    }
})

form.addEventListener('submit', e => {
    if (userPassword.value !== confirmPassword.value) {
        e.preventDefault()
        userPassword.classList.add('error')
        confirmPassword.classList.add('error')
        error.style.display = 'block'
    }
})