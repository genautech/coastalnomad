// CoastalNomad - Chatbot System

class Chatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.currentStep = 'welcome';
        this.userData = {};
        this.init();
    }

    init() {
        this.createChatbot();
        this.attachEventListeners();
        this.loadConversationHistory();
        
        // Auto open after 5 seconds on first visit
        if (!localStorage.getItem('chatbot_opened')) {
            setTimeout(() => {
                this.open();
                localStorage.setItem('chatbot_opened', 'true');
            }, 5000);
        }
    }

    createChatbot() {
        const chatbotHTML = `
            <!-- Chatbot Button -->
            <button class="chatbot-button" id="chatbotButton">
                <i class="fab fa-whatsapp"></i>
                <span class="chatbot-badge">1</span>
            </button>

            <!-- Chatbot Container -->
            <div class="chatbot-container" id="chatbotContainer">
                <div class="chatbot-header">
                    <div class="chatbot-header-info">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
                             alt="Rodrigo Torrezan" class="chatbot-avatar">
                        <div class="chatbot-status">
                            <div class="chatbot-name">Rodrigo Torrezan</div>
                            <div class="chatbot-online">
                                <span class="status-dot"></span>
                                Online now
                            </div>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="chatbot-messages" id="chatbotMessages">
                    <!-- Messages will be inserted here -->
                </div>

                <div class="chatbot-input-container">
                    <input type="text" class="chatbot-input" id="chatbotInput" 
                           placeholder="Type your message...">
                    <button class="chatbot-send-btn" id="chatbotSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const button = document.getElementById('chatbotButton');
        const container = document.getElementById('chatbotContainer');
        const closeBtn = document.getElementById('chatbotClose');
        const input = document.getElementById('chatbotInput');
        const sendBtn = document.getElementById('chatbotSend');

        button.addEventListener('click', () => this.toggle());
        closeBtn.addEventListener('click', () => this.close());
        sendBtn.addEventListener('click', () => this.sendMessage());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        const container = document.getElementById('chatbotContainer');
        const button = document.getElementById('chatbotButton');
        const badge = button.querySelector('.chatbot-badge');
        
        container.classList.add('active');
        button.classList.add('active');
        button.querySelector('i').className = 'fas fa-times';
        
        if (badge) {
            badge.style.display = 'none';
        }
        
        this.isOpen = true;

        // Send welcome message if first time
        if (this.conversationHistory.length === 0) {
            setTimeout(() => {
                this.addBotMessage(
                    `Olá! 👋 Eu sou o Rodrigo Torrezan, especialista em imóveis costeiros para nômades digitais.
                    
Como posso te ajudar hoje?`
                );
                this.showQuickReplies([
                    { icon: '🏠', text: 'Ver propriedades disponíveis', action: 'show_properties' },
                    { icon: '📅', text: 'Agendar uma conversa', action: 'schedule_call' },
                    { icon: '💰', text: 'Calcular custo de vida', action: 'calculator' },
                    { icon: '❓', text: 'Fazer uma pergunta', action: 'ask_question' }
                ]);
            }, 500);
        }
    }

    close() {
        const container = document.getElementById('chatbotContainer');
        const button = document.getElementById('chatbotButton');
        
        container.classList.remove('active');
        button.classList.remove('active');
        button.querySelector('i').className = 'fab fa-whatsapp';
        
        this.isOpen = false;
    }

    addBotMessage(text, delay = 500) {
        const messagesContainer = document.getElementById('chatbotMessages');
        
        // Show typing indicator
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            const messageTime = new Date().toLocaleTimeString('pt-BR', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            const messageHTML = `
                <div class="chat-message bot">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
                         alt="Rodrigo" class="message-avatar">
                    <div>
                        <div class="message-bubble">${text.replace(/\n/g, '<br>')}</div>
                        <div class="message-time">${messageTime}</div>
                    </div>
                </div>
            `;
            
            messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
            this.scrollToBottom();
            
            // Save to history
            this.conversationHistory.push({
                type: 'bot',
                message: text,
                timestamp: new Date().toISOString()
            });
            this.saveConversationHistory();
        }, delay);
    }

    addUserMessage(text) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageTime = new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const messageHTML = `
            <div class="chat-message user">
                <div>
                    <div class="message-bubble">${text}</div>
                    <div class="message-time">${messageTime}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        
        // Save to history
        this.conversationHistory.push({
            type: 'user',
            message: text,
            timestamp: new Date().toISOString()
        });
        this.saveConversationHistory();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingHTML = `
            <div class="chat-message bot typing-message">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
                     alt="Rodrigo" class="message-avatar">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    showQuickReplies(replies) {
        const messagesContainer = document.getElementById('chatbotMessages');
        
        const repliesHTML = `
            <div class="quick-replies">
                ${replies.map(reply => `
                    <button class="quick-reply-btn" data-action="${reply.action}">
                        <span>${reply.icon}</span>
                        <span>${reply.text}</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        const lastMessage = messagesContainer.lastElementChild;
        lastMessage.insertAdjacentHTML('beforeend', repliesHTML);
        
        // Attach event listeners
        const replyButtons = lastMessage.querySelectorAll('.quick-reply-btn');
        replyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                const text = btn.textContent.trim();
                this.handleQuickReply(action, text);
                
                // Remove all quick reply buttons
                document.querySelectorAll('.quick-replies').forEach(el => el.remove());
            });
        });
        
        this.scrollToBottom();
    }

    handleQuickReply(action, text) {
        this.addUserMessage(text);
        
        switch(action) {
            case 'show_properties':
                this.showProperties();
                break;
            case 'schedule_call':
                this.showScheduler();
                break;
            case 'calculator':
                this.showCalculatorLink();
                break;
            case 'ask_question':
                this.askForQuestion();
                break;
            default:
                this.addBotMessage('Como posso ajudar?');
        }
    }

    showProperties() {
        this.addBotMessage('Ótimo! Aqui estão algumas propriedades que podem te interessar:', 800);
        
        setTimeout(() => {
            const messagesContainer = document.getElementById('chatbotMessages');
            
            // Show 3 random properties
            const randomProperties = this.getRandomProperties(3);
            
            randomProperties.forEach((property, index) => {
                setTimeout(() => {
                    const propertyHTML = `
                        <div class="chat-property-card">
                            <img src="${property.images[0]}" alt="${property.title}" class="chat-property-image">
                            <div class="chat-property-info">
                                <div class="chat-property-title">${property.title}</div>
                                <div class="chat-property-location">
                                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                                </div>
                                <div class="chat-property-price">$${property.price.toLocaleString()}</div>
                                <button class="chat-property-btn" onclick="window.location.href='property.html?id=${property.id}'">
                                    Ver Detalhes <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    const lastMessage = messagesContainer.lastElementChild;
                    lastMessage.querySelector('.message-bubble').insertAdjacentHTML('beforeend', propertyHTML);
                    this.scrollToBottom();
                }, index * 300);
            });
            
            setTimeout(() => {
                this.addBotMessage('Gostou de alguma? Posso te dar mais informações ou agendar uma visita! 😊');
                this.showQuickReplies([
                    { icon: '📅', text: 'Agendar visita', action: 'schedule_call' },
                    { icon: '🏠', text: 'Ver mais imóveis', action: 'view_all' },
                    { icon: '💬', text: 'Fazer uma pergunta', action: 'ask_question' }
                ]);
            }, randomProperties.length * 300 + 1000);
            
        }, 1000);
    }

    showScheduler() {
        this.addBotMessage('Perfeito! Vamos agendar uma conversa. Escolha o melhor dia para você:', 500);
        
        setTimeout(() => {
            const messagesContainer = document.getElementById('chatbotMessages');
            const calendarHTML = this.generateCalendar();
            
            const lastMessage = messagesContainer.lastElementChild;
            lastMessage.querySelector('.message-bubble').insertAdjacentHTML('beforeend', calendarHTML);
            this.scrollToBottom();
            
            this.attachCalendarListeners();
        }, 1000);
    }

    generateCalendar() {
        const today = new Date();
        const currentMonth = today.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
        
        let calendarHTML = `
            <div class="chat-calendar">
                <div class="calendar-header">
                    <div class="calendar-month">${currentMonth}</div>
                    <div class="calendar-nav">
                        <button class="calendar-nav-btn" disabled>
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="calendar-nav-btn">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div class="calendar-grid">
                    <div class="calendar-day header">Dom</div>
                    <div class="calendar-day header">Seg</div>
                    <div class="calendar-day header">Ter</div>
                    <div class="calendar-day header">Qua</div>
                    <div class="calendar-day header">Qui</div>
                    <div class="calendar-day header">Sex</div>
                    <div class="calendar-day header">Sáb</div>
        `;
        
        // Empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="calendar-day disabled"></div>';
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(today.getFullYear(), today.getMonth(), day);
            const isDisabled = date < today;
            const className = isDisabled ? 'calendar-day disabled' : 'calendar-day';
            const dataDate = date.toISOString().split('T')[0];
            
            calendarHTML += `<div class="${className}" ${!isDisabled ? `data-date="${dataDate}"` : ''}>${day}</div>`;
        }
        
        calendarHTML += `
                </div>
                <div class="time-slots" id="timeSlots" style="display: none;">
                    <div class="time-slot" data-time="09:00">09:00</div>
                    <div class="time-slot" data-time="10:00">10:00</div>
                    <div class="time-slot" data-time="11:00">11:00</div>
                    <div class="time-slot" data-time="14:00">14:00</div>
                    <div class="time-slot" data-time="15:00">15:00</div>
                    <div class="time-slot" data-time="16:00">16:00</div>
                </div>
            </div>
        `;
        
        return calendarHTML;
    }

    attachCalendarListeners() {
        const calendarDays = document.querySelectorAll('.calendar-day:not(.header):not(.disabled)');
        const timeSlots = document.getElementById('timeSlots');
        const timeSlotButtons = document.querySelectorAll('.time-slot');
        
        calendarDays.forEach(day => {
            day.addEventListener('click', () => {
                calendarDays.forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
                
                timeSlots.style.display = 'grid';
                this.userData.selectedDate = day.dataset.date;
                this.scrollToBottom();
            });
        });
        
        timeSlotButtons.forEach(slot => {
            slot.addEventListener('click', () => {
                timeSlotButtons.forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
                
                this.userData.selectedTime = slot.dataset.time;
                this.confirmScheduling();
            });
        });
    }

    confirmScheduling() {
        const date = new Date(this.userData.selectedDate);
        const formattedDate = date.toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        this.addUserMessage(`${formattedDate} às ${this.userData.selectedTime}`);
        
        this.addBotMessage(`Perfeito! 🎉

Agendamento confirmado para:
📅 ${formattedDate}
⏰ ${this.userData.selectedTime}

Para finalizar, preciso de algumas informações:`);
        
        setTimeout(() => {
            this.askForName();
        }, 1500);
    }

    askForName() {
        this.addBotMessage('Qual é o seu nome?');
        this.currentStep = 'awaiting_name';
    }

    askForEmail() {
        this.addBotMessage('Qual é o seu melhor email?');
        this.currentStep = 'awaiting_email';
    }

    askForPhone() {
        this.addBotMessage('E seu WhatsApp? (com DDD)');
        this.currentStep = 'awaiting_phone';
    }

    finalizeScheduling() {
        this.addBotMessage(`Pronto, ${this.userData.name}! ✅

Seu agendamento está confirmado:
📅 ${this.userData.selectedDate}
⏰ ${this.userData.selectedTime}
📧 ${this.userData.email}
📱 ${this.userData.phone}

Vou te enviar um email de confirmação e um lembrete no WhatsApp.

Até lá! 😊`);
        
        // Save lead to localStorage
        this.saveLead();
        
        // Reset
        this.currentStep = 'welcome';
        this.userData = {};
        
        setTimeout(() => {
            this.showQuickReplies([
                { icon: '🏠', text: 'Ver propriedades', action: 'show_properties' },
                { icon: '💬', text: 'Fazer outra pergunta', action: 'ask_question' }
            ]);
        }, 2000);
    }

    showCalculatorLink() {
        this.addBotMessage('A calculadora de custo de vida está na página de detalhes de cada imóvel! 💰');
        
        setTimeout(() => {
            this.addBotMessage('Posso te mostrar alguns imóveis com essa funcionalidade:');
            this.showQuickReplies([
                { icon: '🏠', text: 'Ver propriedades', action: 'show_properties' },
                { icon: '💬', text: 'Fazer outra pergunta', action: 'ask_question' }
            ]);
        }, 1500);
    }

    askForQuestion() {
        this.addBotMessage('Claro! Pode me perguntar qualquer coisa sobre os imóveis, a região, o processo de compra... Estou aqui para ajudar! 😊');
        this.currentStep = 'awaiting_question';
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        // Process message based on current step
        this.processMessage(message);
    }

    processMessage(message) {
        switch(this.currentStep) {
            case 'awaiting_name':
                this.userData.name = message;
                this.askForEmail();
                break;
                
            case 'awaiting_email':
                this.userData.email = message;
                this.askForPhone();
                break;
                
            case 'awaiting_phone':
                this.userData.phone = message;
                this.finalizeScheduling();
                break;
                
            case 'awaiting_question':
                this.answerQuestion(message);
                break;
                
            default:
                this.handleGeneralMessage(message);
        }
    }

    answerQuestion(question) {
        // Simple keyword-based responses
        const lowerQuestion = question.toLowerCase();
        
        let response = '';
        
        if (lowerQuestion.includes('preço') || lowerQuestion.includes('valor') || lowerQuestion.includes('custo')) {
            response = 'Nossos imóveis variam de $98,000 até $320,000 USD. Temos opções para diferentes orçamentos! Quer ver as propriedades disponíveis?';
        } else if (lowerQuestion.includes('localização') || lowerQuestion.includes('onde') || lowerQuestion.includes('região')) {
            response = 'Trabalhamos com imóveis em Curitiba, Florianópolis, Balneário Camboriú, Guaratuba e Ilha do Mel. Todas regiões perfeitas para nômades digitais! Em qual você tem mais interesse?';
        } else if (lowerQuestion.includes('internet') || lowerQuestion.includes('wifi')) {
            response = 'Todos os nossos imóveis têm internet de alta velocidade! A maioria com fibra óptica de até 1Gbps. Perfeito para trabalho remoto! 🚀';
        } else if (lowerQuestion.includes('estrangeiro') || lowerQuestion.includes('comprar')) {
            response = 'Sim! Estrangeiros podem comprar imóveis no Brasil tranquilamente. O processo é bem simples e eu posso te orientar em cada etapa. Quer agendar uma conversa para discutir?';
        } else {
            response = 'Ótima pergunta! Para te dar a melhor resposta, que tal agendarmos uma conversa? Assim posso entender melhor suas necessidades! 😊';
        }
        
        this.addBotMessage(response);
        
        setTimeout(() => {
            this.showQuickReplies([
                { icon: '📅', text: 'Agendar conversa', action: 'schedule_call' },
                { icon: '🏠', text: 'Ver imóveis', action: 'show_properties' },
                { icon: '💬', text: 'Outra pergunta', action: 'ask_question' }
            ]);
        }, 1500);
        
        this.currentStep = 'welcome';
    }

    handleGeneralMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('hello')) {
            this.addBotMessage('Olá! Como posso te ajudar hoje? 😊');
            this.showQuickReplies([
                { icon: '🏠', text: 'Ver propriedades', action: 'show_properties' },
                { icon: '📅', text: 'Agendar conversa', action: 'schedule_call' },
                { icon: '❓', text: 'Fazer pergunta', action: 'ask_question' }
            ]);
        } else {
            this.answerQuestion(message);
        }
    }

    getRandomProperties(count) {
        if (typeof propertiesData === 'undefined') return [];
        
        const shuffled = [...propertiesData].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
    }

    saveConversationHistory() {
        localStorage.setItem('chatbot_history', JSON.stringify(this.conversationHistory));
    }

    loadConversationHistory() {
        const saved = localStorage.getItem('chatbot_history');
        if (saved) {
            this.conversationHistory = JSON.parse(saved);
        }
    }

    saveLead() {
        const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
        leads.push({
            ...this.userData,
            timestamp: new Date().toISOString(),
            source: 'chatbot'
        });
        localStorage.setItem('chatbot_leads', JSON.stringify(leads));
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new Chatbot();
});