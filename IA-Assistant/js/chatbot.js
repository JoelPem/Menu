// chatbot.js

class ChatBot {
    constructor() {
        this.messages = [];
    }

    sendMessage(message) {
        this.messages.push({
            text: message,
            timestamp: new Date().toISOString()
        });
        this.displayMessages();
    }

    displayMessages() {
        const chatContainer = document.getElementById('chat');
        chatContainer.innerHTML = '';
        this.messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${msg.timestamp}: ${msg.text}`;
            chatContainer.appendChild(messageElement);
        });
    }
}

// Usage:
const chatbot = new ChatBot();
// chatbot.sendMessage('Hello!'); // Use this to send a message
