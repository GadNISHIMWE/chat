const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const  chatHeader = document.querySelector('.chat-header')
const  chatMessages = document.querySelector('.chat-messages')
const  chatInputForm = document.querySelector('.chat-input-form')
const  chatInput = document.querySelector('#chat-input')
const  clearChatButton = document.querySelector('.clear-chat-button')
const  blueBg = document.querySelector('.message')
const  greyBg = document.querySelector('.message')
const chatMessageElement = (message) => ` 
<div class="message ${message.sender === 'john' ? 'blue-bg' : 'gray-bg'}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`
let messageSender = 'john'

const updateMessageSender = (name) => {
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...`
    chatInput.placeholder = `Type here, ${messageSender}...`

    if(name ==='john'){
        johnSelectorBtn.classList.add('active-person')
        janeSelectorBtn.classList.remove('active-person')
    }
    if(name ==='jane'){
        janeSelectorBtn.classList.add('active-person')
        johnSelectorBtn.classList.remove('active-person')
    }
    
    chatInput.focus()
}
johnSelectorBtn.onclick = () => 
    updateMessageSender('john') 

janeSelectorBtn.onclick = () => 
    updateMessageSender('jane')



const sendMessage = (e) => {
    e.preventDefault()

const timestamp = new Date().toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true})
const message={
    sender: messageSender,
    text: chatInput.value,
    timestamp
}
chatMessages.innerHTML += chatMessageElement(message)
// chatInputForm.requestFullscreen()
chatInputForm.reset()
}
chatInputForm.addEventListener('submit', sendMessage)
// const textArea = () =>{
//     text.innerHTML +=chatInput.value
// }
// chatInputForm.addEventListener('submit', textArea)
clearChatButton.addEventListener('click', () => {
localStorage.clear()
chatMessages.innerHTML = ''
})
blueBg.onclick = () =>{
   blueBg.parentNode.removeChild(blueBg);
}
greyBg.onclick = () =>{
    greyBg.parentNode.removeChild(greyBg);
 }