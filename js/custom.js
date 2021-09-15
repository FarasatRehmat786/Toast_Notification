const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const message = [
    'message one',
    'message two',
    'message three',
    'message four'
]

const type = ['info', 'sucsess', 'danger', 'warning']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
    const notify = document.createElement('dive')
    notify.classList.add('toast')
    notify.classList.add(type ? type : getRandomType())

    notify.innerText = message ? message : getRandomMessage()

    toast.appendChild(notify)

    setTimeout(() => {
        notify.remove()
    }, 2000)
}

function getRandomMessage(){
    return message[Math.floor(Math.random() * message.length)]
}
function getRandomType(){
    return type[Math.floor(Math.random() * type.length)]
}