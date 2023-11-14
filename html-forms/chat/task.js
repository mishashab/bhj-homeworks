const messages = document.querySelector('.chat-widget__messages');
const inputMassege = document.getElementById('chat-widget__input');
const container = document.querySelector('.chat-widget__messages-container'); 

document.querySelector('.chat-widget__side').onclick = () => {
        document.querySelector('.chat-widget').classList.add('chat-widget_active');
}

inputMassege.addEventListener('keypress', (event) => {
    let inputText = inputMassege.value;

    if (event.key === "Enter" && inputText) {
        addMessage(inputText);
        inputMassege.value = '';
        addMessage();
        container.scrollTo(0, container.scrollHeight);
    }    
})


function getRandomAnswer() {
    let answerArray = ['Все на перекуре.', 
        'У нас кофебрейк.',
        'Все специалисты заняты.',
        'Не могу помочь.',
        'У службы поддержки нерабочий день.'
        ]

    return answerArray[(Math.floor(Math.random() * answerArray.length))]
}


function addMessage(text = ''){
    let messageClass = ''
    if (text) {
        messageClass = ' message_client';
    } else {
        text = getRandomAnswer();
    }

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    minutes = minutes > 9 ? minutes: '0' + minutes;
    hours = hours > 9 ? hours: '0' + hours; 

    messages.innerHTML += `
            <div class="message${messageClass}">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">
                ${text}
                </div>
            </div>
            `;
        
}