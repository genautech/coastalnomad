/**
 * Admin Panel JavaScript
 * Manages leads, conversion funnel, property creation, and analytics
 */

class AdminPanel {
    constructor() {
        this.leads = [];
        this.conversations = [];
        this.properties = [];
        this.currentTab = 'leads';
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.updateDashboard();
        this.renderLeads();
        this.renderFunnel();
        this.renderConversations();
    }

    loadData() {
        // Load data from localStorage
        this.leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
        this.conversations = JSON.parse(localStorage.getItem('chatbot_conversations') || '[]');
        this.properties = JSON.parse(localStorage.getItem('admin_properties') || '[]');
    }

    saveData() {
        localStorage.setItem('chatbot_leads', JSON.stringify(this.leads));
        localStorage.setItem('chatbot_conversations', JSON.stringify(this.conversations));
        localStorage.setItem('admin_properties', JSON.stringify(this.properties));
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // Property form submission
        const propertyForm = document.getElementById('addPropertyForm');
        if (propertyForm) {
            propertyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addProperty(e.target);
            });
        }

        // Export leads button
        const exportBtn = document.getElementById('exportLeads');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportLeads());
        }

        // Search functionality
        const searchInput = document.getElementById('searchLeads');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterLeads(e.target.value);
            });
        }

        // Refresh button
        const refreshBtn = document.getElementById('refreshData');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.loadData();
                this.updateDashboard();
                this.renderLeads();
                this.renderFunnel();
                this.renderConversations();
                this.showNotification('Dados atualizados com sucesso!', 'success');
            });
        }
    }

    switchTab(tabName) {
        // Update active tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Show corresponding content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}Tab`).classList.add('active');

        this.currentTab = tabName;
    }

    updateDashboard() {
        // Total leads
        const totalLeads = this.leads.length;
        document.getElementById('totalLeads').textContent = totalLeads;

        // Scheduled meetings
        const scheduledMeetings = this.leads.filter(lead => 
            lead.scheduledDate && lead.scheduledTime
        ).length;
        document.getElementById('scheduledMeetings').textContent = scheduledMeetings;

        // Total properties
        const totalProperties = this.properties.length;
        document.getElementById('totalProperties').textContent = totalProperties;

        // Total conversations
        const totalConversations = this.conversations.length;
        document.getElementById('totalConversations').textContent = totalConversations;
    }

    renderLeads() {
        const tbody = document.getElementById('leadsTableBody');
        if (!tbody) return;

        if (this.leads.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 40px; color: #64748b;">
                        <div style="font-size: 48px; margin-bottom: 16px;">📭</div>
                        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Nenhum lead ainda</div>
                        <div style="font-size: 14px;">Os leads capturados pelo chatbot aparecerão aqui</div>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = this.leads.map((lead, index) => {
            const status = lead.status || 'new';
            const statusBadge = this.getStatusBadge(status);
            const date = new Date(lead.timestamp).toLocaleString('pt-BR');
            
            return `
                <tr>
                    <td><strong>#${String(index + 1).padStart(3, '0')}</strong></td>
                    <td>${lead.name || '-'}</td>
                    <td>${lead.email || '-'}</td>
                    <td>${lead.phone || '-'}</td>
                    <td>
                        <select class="status-select" data-index="${index}" onchange="adminPanel.updateLeadStatus(${index}, this.value)">
                            <option value="new" ${status === 'new' ? 'selected' : ''}>🎯 Novo</option>
                            <option value="contacted" ${status === 'contacted' ? 'selected' : ''}>📞 Contatado</option>
                            <option value="scheduled" ${status === 'scheduled' ? 'selected' : ''}>📅 Agendado</option>
                            <option value="visited" ${status === 'visited' ? 'selected' : ''}>🏠 Visitado</option>
                            <option value="negotiating" ${status === 'negotiating' ? 'selected' : ''}>💬 Negociando</option>
                            <option value="closed" ${status === 'closed' ? 'selected' : ''}>✅ Fechado</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn-small" onclick="adminPanel.viewLeadDetails(${index})">Ver Detalhes</button>
                        <button class="btn-small btn-danger" onclick="adminPanel.deleteLead(${index})">Excluir</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    getStatusBadge(status) {
        const badges = {
            new: '<span class="status-badge status-new">🎯 Novo</span>',
            contacted: '<span class="status-badge status-contacted">📞 Contatado</span>',
            scheduled: '<span class="status-badge status-scheduled">📅 Agendado</span>',
            visited: '<span class="status-badge status-visited">🏠 Visitado</span>',
            negotiating: '<span class="status-badge status-negotiating">💬 Negociando</span>',
            closed: '<span class="status-badge status-closed">✅ Fechado</span>'
        };
        return badges[status] || badges.new;
    }

    updateLeadStatus(index, newStatus) {
        this.leads[index].status = newStatus;
        this.leads[index].lastUpdated = new Date().toISOString();
        this.saveData();
        this.renderLeads();
        this.renderFunnel();
        this.showNotification('Status atualizado com sucesso!', 'success');
    }

    viewLeadDetails(index) {
        const lead = this.leads[index];
        const details = `
            <div style="text-align: left;">
                <h3 style="margin-bottom: 20px;">${lead.name}</h3>
                <p><strong>Email:</strong> ${lead.email || '-'}</p>
                <p><strong>Telefone:</strong> ${lead.phone || '-'}</p>
                <p><strong>Interesse:</strong> ${lead.interest || '-'}</p>
                <p><strong>Orçamento:</strong> ${lead.budget || '-'}</p>
                <p><strong>Data de Criação:</strong> ${new Date(lead.timestamp).toLocaleString('pt-BR')}</p>
                ${lead.scheduledDate ? `<p><strong>Reunião Agendada:</strong> ${lead.scheduledDate} às ${lead.scheduledTime}</p>` : ''}
                ${lead.message ? `<p><strong>Mensagem:</strong> ${lead.message}</p>` : ''}
            </div>
        `;
        
        this.showModal('Detalhes do Lead', details);
    }

    deleteLead(index) {
        if (confirm('Tem certeza que deseja excluir este lead?')) {
            this.leads.splice(index, 1);
            this.saveData();
            this.updateDashboard();
            this.renderLeads();
            this.renderFunnel();
            this.showNotification('Lead excluído com sucesso!', 'success');
        }
    }

    renderFunnel() {
        const stages = ['new', 'contacted', 'scheduled', 'visited', 'negotiating', 'closed'];
        const stageLabels = {
            new: 'New',
            contacted: 'Contacted',
            scheduled: 'Scheduled',
            visited: 'Visited',
            negotiating: 'Negotiating',
            closed: 'Closed'
        };

        stages.forEach(stage => {
            const leads = this.leads.filter(lead => (lead.status || 'new') === stage);
            const countElement = document.getElementById(`funnel${stageLabels[stage]}`);
            const leadsElement = document.getElementById(`funnel${stageLabels[stage]}Leads`);

            if (countElement) {
                countElement.textContent = leads.length;
            }

            if (leadsElement) {
                if (leads.length === 0) {
                    leadsElement.innerHTML = '<div class="funnel-empty">Nenhum lead nesta etapa</div>';
                } else {
                    leadsElement.innerHTML = leads.map((lead, index) => {
                        const globalIndex = this.leads.findIndex(l => l === lead);
                        return `
                            <div class="funnel-card">
                                <div class="funnel-card-name">${lead.name || 'Sem nome'}</div>
                                <div class="funnel-card-contact">${lead.email || lead.phone || '-'}</div>
                                <div class="funnel-card-date">${new Date(lead.timestamp).toLocaleDateString('pt-BR')}</div>
                                <button class="btn-small" onclick="adminPanel.viewLeadDetails(${globalIndex})">Ver</button>
                            </div>
                        `;
                    }).join('');
                }
            }
        });
    }

    renderConversations() {
        const container = document.getElementById('conversationsList');
        if (!container) return;

        if (this.conversations.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #64748b;">
                    <div style="font-size: 64px; margin-bottom: 20px;">💬</div>
                    <div style="font-size: 20px; font-weight: 600; margin-bottom: 10px;">Nenhuma conversa ainda</div>
                    <div style="font-size: 16px;">As conversas do chatbot aparecerão aqui</div>
                </div>
            `;
            return;
        }

        container.innerHTML = this.conversations.map((conversation, index) => {
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            const date = new Date(conversation.timestamp).toLocaleString('pt-BR');
            
            return `
                <div class="conversation-card" onclick="adminPanel.viewConversation(${index})">
                    <div class="conversation-header">
                        <span class="conversation-user">${conversation.userName || 'Usuário Anônimo'}</span>
                        <span class="conversation-date">${date}</span>
                    </div>
                    <div class="conversation-preview">${lastMessage ? lastMessage.text : 'Sem mensagens'}</div>
                    <div class="conversation-stats">
                        <span>📨 ${conversation.messages.length} mensagens</span>
                        ${conversation.leadCaptured ? '<span style="color: #10b981;">✅ Lead capturado</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    viewConversation(index) {
        const conversation = this.conversations[index];
        const messagesHTML = conversation.messages.map(msg => {
            const time = new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            const isBot = msg.sender === 'bot';
            return `
                <div style="margin-bottom: 16px; text-align: ${isBot ? 'left' : 'right'};">
                    <div style="display: inline-block; padding: 12px 16px; border-radius: 16px; background: ${isBot ? '#f1f5f9' : '#0EA5E9'}; color: ${isBot ? '#1e293b' : 'white'}; max-width: 70%;">
                        ${msg.text}
                    </div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">${time}</div>
                </div>
            `;
        }).join('');

        const details = `
            <div style="max-height: 500px; overflow-y: auto; padding: 20px; background: white; border-radius: 8px;">
                ${messagesHTML}
            </div>
        `;

        this.showModal(`Conversa com ${conversation.userName || 'Usuário Anônimo'}`, details);
    }

    addProperty(form) {
        const formData = new FormData(form);
        const property = {
            id: Date.now().toString(),
            title: formData.get('title'),
            location: formData.get('location'),
            type: formData.get('type'),
            price: formData.get('price'),
            bedrooms: formData.get('bedrooms'),
            bathrooms: formData.get('bathrooms'),
            area: formData.get('area'),
            description: formData.get('description'),
            images: formData.get('images').split('\n').filter(img => img.trim()),
            qol: {
                safety: parseInt(formData.get('qol_safety')) || 0,
                cost: parseInt(formData.get('qol_cost')) || 0,
                internet: parseInt(formData.get('qol_internet')) || 0,
                community: parseInt(formData.get('qol_community')) || 0,
                climate: parseInt(formData.get('qol_climate')) || 0
            },
            amenities: formData.get('amenities').split(',').map(a => a.trim()).filter(a => a),
            createdAt: new Date().toISOString()
        };

        this.properties.push(property);
        this.saveData();
        this.updateDashboard();
        
        form.reset();
        this.showNotification('Imóvel adicionado com sucesso!', 'success');
        
        // Show property preview
        this.showPropertyPreview(property);
    }

    showPropertyPreview(property) {
        const preview = `
            <div style="text-align: left;">
                <h3>${property.title}</h3>
                <p><strong>Localização:</strong> ${property.location}</p>
                <p><strong>Tipo:</strong> ${property.type}</p>
                <p><strong>Preço:</strong> R$ ${parseInt(property.price).toLocaleString('pt-BR')}</p>
                <p><strong>Quartos:</strong> ${property.bedrooms} | <strong>Banheiros:</strong> ${property.bathrooms} | <strong>Área:</strong> ${property.area} m²</p>
                <p><strong>Descrição:</strong> ${property.description}</p>
                <div style="margin-top: 16px;">
                    <strong>Quality of Life Scores:</strong>
                    <div style="margin-top: 8px;">
                        <div>🛡️ Segurança: ${property.qol.safety}/10</div>
                        <div>💰 Custo de Vida: ${property.qol.cost}/10</div>
                        <div>📡 Internet: ${property.qol.internet}/10</div>
                        <div>👥 Comunidade: ${property.qol.community}/10</div>
                        <div>🌤️ Clima: ${property.qol.climate}/10</div>
                    </div>
                </div>
            </div>
        `;
        this.showModal('Imóvel Adicionado', preview);
    }

    exportLeads() {
        if (this.leads.length === 0) {
            this.showNotification('Nenhum lead para exportar', 'warning');
            return;
        }

        // Create CSV content
        const headers = ['ID', 'Nome', 'Email', 'Telefone', 'Status', 'Interesse', 'Orçamento', 'Data Agendada', 'Hora Agendada', 'Mensagem', 'Data de Criação'];
        const rows = this.leads.map((lead, index) => [
            index + 1,
            lead.name || '',
            lead.email || '',
            lead.phone || '',
            lead.status || 'new',
            lead.interest || '',
            lead.budget || '',
            lead.scheduledDate || '',
            lead.scheduledTime || '',
            lead.message || '',
            new Date(lead.timestamp).toLocaleString('pt-BR')
        ]);

        const csv = [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');

        // Download CSV
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.showNotification('Leads exportados com sucesso!', 'success');
    }

    filterLeads(searchTerm) {
        const tbody = document.getElementById('leadsTableBody');
        if (!tbody) return;

        const filtered = this.leads.filter(lead => {
            const searchString = searchTerm.toLowerCase();
            return (
                (lead.name && lead.name.toLowerCase().includes(searchString)) ||
                (lead.email && lead.email.toLowerCase().includes(searchString)) ||
                (lead.phone && lead.phone.toLowerCase().includes(searchString))
            );
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 40px; color: #64748b;">
                        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                        <div style="font-size: 18px;">Nenhum lead encontrado com "${searchTerm}"</div>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filtered.map((lead, index) => {
            const globalIndex = this.leads.findIndex(l => l === lead);
            const status = lead.status || 'new';
            
            return `
                <tr>
                    <td><strong>#${String(globalIndex + 1).padStart(3, '0')}</strong></td>
                    <td>${lead.name || '-'}</td>
                    <td>${lead.email || '-'}</td>
                    <td>${lead.phone || '-'}</td>
                    <td>
                        <select class="status-select" data-index="${globalIndex}" onchange="adminPanel.updateLeadStatus(${globalIndex}, this.value)">
                            <option value="new" ${status === 'new' ? 'selected' : ''}>🎯 Novo</option>
                            <option value="contacted" ${status === 'contacted' ? 'selected' : ''}>📞 Contatado</option>
                            <option value="scheduled" ${status === 'scheduled' ? 'selected' : ''}>📅 Agendado</option>
                            <option value="visited" ${status === 'visited' ? 'selected' : ''}>🏠 Visitado</option>
                            <option value="negotiating" ${status === 'negotiating' ? 'selected' : ''}>💬 Negociando</option>
                            <option value="closed" ${status === 'closed' ? 'selected' : ''}>✅ Fechado</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn-small" onclick="adminPanel.viewLeadDetails(${globalIndex})">Ver Detalhes</button>
                        <button class="btn-small btn-danger" onclick="adminPanel.deleteLead(${globalIndex})">Excluir</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    showModal(title, content) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        notification.innerHTML = `
            <span style="margin-right: 8px;">${icons[type]}</span>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Demo data for testing
    loadDemoData() {
        const demoLeads = [
            {
                name: 'John Smith',
                email: 'john.smith@email.com',
                phone: '+1 555-0101',
                status: 'new',
                interest: 'Florianópolis',
                budget: 'R$ 500.000 - R$ 800.000',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                source: 'chatbot'
            },
            {
                name: 'Maria Santos',
                email: 'maria.santos@email.com',
                phone: '+55 11 98765-4321',
                status: 'contacted',
                interest: 'Balneário Camboriú',
                budget: 'R$ 800.000+',
                scheduledDate: '2025-11-20',
                scheduledTime: '14:00',
                timestamp: new Date(Date.now() - 172800000).toISOString(),
                source: 'chatbot'
            },
            {
                name: 'David Johnson',
                email: 'david.j@email.com',
                phone: '+1 555-0202',
                status: 'scheduled',
                interest: 'Curitiba',
                budget: 'R$ 300.000 - R$ 500.000',
                scheduledDate: '2025-11-22',
                scheduledTime: '10:00',
                timestamp: new Date(Date.now() - 259200000).toISOString(),
                source: 'chatbot'
            },
            {
                name: 'Ana Silva',
                email: 'ana.silva@email.com',
                phone: '+55 48 99999-8888',
                status: 'visited',
                interest: 'Florianópolis',
                budget: 'R$ 500.000 - R$ 800.000',
                timestamp: new Date(Date.now() - 345600000).toISOString(),
                source: 'chatbot',
                message: 'Adorei os imóveis em Florianópolis!'
            },
            {
                name: 'Robert Lee',
                email: 'robert.lee@email.com',
                phone: '+1 555-0303',
                status: 'negotiating',
                interest: 'Balneário Camboriú',
                budget: 'R$ 800.000+',
                timestamp: new Date(Date.now() - 432000000).toISOString(),
                source: 'chatbot'
            }
        ];

        const demoConversations = [
            {
                userName: 'John Smith',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                leadCaptured: true,
                messages: [
                    { sender: 'bot', text: 'Olá! 👋 Sou o assistente do Rodrigo Torrezan. Como posso ajudar você hoje?', timestamp: new Date(Date.now() - 86400000).toISOString() },
                    { sender: 'user', text: 'Quero conhecer imóveis em Florianópolis', timestamp: new Date(Date.now() - 86400000 + 30000).toISOString() },
                    { sender: 'bot', text: 'Ótima escolha! Temos propriedades incríveis em Florianópolis. Qual seu nome?', timestamp: new Date(Date.now() - 86400000 + 60000).toISOString() },
                    { sender: 'user', text: 'John Smith', timestamp: new Date(Date.now() - 86400000 + 90000).toISOString() }
                ]
            },
            {
                userName: 'Maria Santos',
                timestamp: new Date(Date.now() - 172800000).toISOString(),
                leadCaptured: true,
                messages: [
                    { sender: 'bot', text: 'Olá! 👋 Como posso ajudar?', timestamp: new Date(Date.now() - 172800000).toISOString() },
                    { sender: 'user', text: 'Gostaria de agendar uma visita', timestamp: new Date(Date.now() - 172800000 + 30000).toISOString() },
                    { sender: 'bot', text: 'Perfeito! Vamos agendar. Qual seu nome?', timestamp: new Date(Date.now() - 172800000 + 60000).toISOString() },
                    { sender: 'user', text: 'Maria Santos', timestamp: new Date(Date.now() - 172800000 + 90000).toISOString() }
                ]
            }
        ];

        this.leads = [...demoLeads];
        this.conversations = [...demoConversations];
        this.saveData();
        this.updateDashboard();
        this.renderLeads();
        this.renderFunnel();
        this.renderConversations();
        this.showNotification('Dados de demonstração carregados!', 'success');
    }
}

// Initialize admin panel when page loads
let adminPanel;
document.addEventListener('DOMContentLoaded', () => {
    adminPanel = new AdminPanel();
    
    // Add demo data button listener
    const demoBtn = document.getElementById('loadDemoData');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            if (confirm('Isso irá adicionar dados de demonstração. Continuar?')) {
                adminPanel.loadDemoData();
            }
        });
    }
});
