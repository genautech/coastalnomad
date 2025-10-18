/**
 * Admin Dashboard JavaScript
 * Complete management system for CoastalNomad
 */

class AdminDashboard {
    constructor() {
        this.contacts = [];
        this.properties = [];
        this.amenities = [];
        this.activities = [];
        this.init();
    }

    init() {
        console.log('🚀 Admin Dashboard initializing...');
        this.loadData();
        console.log('📊 Data loaded:', {
            contacts: this.contacts.length,
            properties: this.properties.length,
            amenities: this.amenities.length
        });
        this.updateDashboard();
        this.renderContacts();
        this.renderFunnel();
        this.renderProperties();
        this.renderAmenities();
        this.renderActivities();
        console.log('✅ Admin Dashboard initialized successfully!');
    }

    loadData() {
        // Load from localStorage
        this.contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
        this.properties = JSON.parse(localStorage.getItem('admin_properties') || '[]');
        this.amenities = JSON.parse(localStorage.getItem('admin_amenities') || JSON.stringify(this.getDefaultAmenities()));
        this.activities = JSON.parse(localStorage.getItem('admin_activities') || '[]');
        
        // Also load chatbot leads
        const chatbotLeads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
        // Merge chatbot leads into contacts if not already present
        chatbotLeads.forEach(lead => {
            if (!this.contacts.find(c => c.email === lead.email)) {
                this.contacts.push({
                    ...lead,
                    stage: 1, // Initial consultation
                    source: lead.source || 'chatbot'
                });
            }
        });
        
        // Load properties from data.js if admin_properties is empty
        if (this.properties.length === 0 && typeof propertiesData !== 'undefined') {
            console.log('📦 Loading properties from data.js:', propertiesData.length);
            this.properties = propertiesData.map(p => ({...p, active: true}));
            this.saveData();
        }
        
        // Auto-load demo data on first access if no contacts exist
        const firstTimeUser = !localStorage.getItem('admin_dashboard_initialized');
        if (firstTimeUser && this.contacts.length === 0) {
            console.log('🎬 First time user detected, loading demo data automatically...');
            this.loadDemoDataSilent();
            localStorage.setItem('admin_dashboard_initialized', 'true');
        }
    }

    saveData() {
        localStorage.setItem('admin_contacts', JSON.stringify(this.contacts));
        localStorage.setItem('admin_properties', JSON.stringify(this.properties));
        localStorage.setItem('admin_amenities', JSON.stringify(this.amenities));
        localStorage.setItem('admin_activities', JSON.stringify(this.activities));
    }

    getDefaultAmenities() {
        return [
            { icon: '🚀', text: 'Fiber Internet' },
            { icon: '🏊', text: 'Swimming Pool' },
            { icon: '💪', text: 'Fitness Center' },
            { icon: '🏖️', text: 'Beach Access' },
            { icon: '☕', text: 'Coworking Space' },
            { icon: '🅿️', text: 'Parking' },
            { icon: '🔒', text: '24/7 Security' },
            { icon: '🌊', text: 'Ocean View' },
            { icon: '🏡', text: 'Garden' },
            { icon: '🚗', text: 'Garage' },
            { icon: '🎮', text: 'Game Room' },
            { icon: '🍽️', text: 'Restaurant' },
            { icon: '🧖', text: 'Sauna' },
            { icon: '🎾', text: 'Tennis Court' },
            { icon: '🏀', text: 'Basketball Court' },
            { icon: '👶', text: 'Kids Area' },
            { icon: '🐕', text: 'Pet Friendly' },
            { icon: '♿', text: 'Accessible' }
        ];
    }
    
    loadDemoDataSilent() {
        const demoContacts = [
            {
                name: 'John Smith',
                email: 'john.smith@email.com',
                phone: '+1 555-0101',
                stage: 1,
                interest: 'Florianópolis',
                budget: '$500,000 - $800,000',
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                source: 'chatbot',
                lastUpdated: new Date(Date.now() - 86400000).toISOString()
            },
            {
                name: 'Maria Santos',
                email: 'maria.santos@email.com',
                phone: '+55 11 98765-4321',
                stage: 3,
                interest: 'Balneário Camboriú',
                budget: '$800,000+',
                scheduledDate: '2024-11-20',
                scheduledTime: '14:00',
                timestamp: new Date(Date.now() - 172800000).toISOString(),
                source: 'website',
                lastUpdated: new Date(Date.now() - 172800000).toISOString()
            },
            {
                name: 'David Johnson',
                email: 'david.j@email.com',
                phone: '+1 555-0202',
                stage: 5,
                interest: 'Curitiba',
                budget: '$300,000 - $500,000',
                timestamp: new Date(Date.now() - 259200000).toISOString(),
                source: 'chatbot',
                lastUpdated: new Date(Date.now() - 259200000).toISOString()
            },
            {
                name: 'Ana Silva',
                email: 'ana.silva@email.com',
                phone: '+55 48 99999-8888',
                stage: 7,
                interest: 'Florianópolis',
                budget: '$500,000 - $800,000',
                timestamp: new Date(Date.now() - 345600000).toISOString(),
                source: 'referral',
                message: 'Adorei os imóveis!',
                lastUpdated: new Date(Date.now() - 345600000).toISOString()
            }
        ];
        
        this.contacts = demoContacts;
        this.addActivity('Sistema iniciado', 'Dados de demonstração carregados automaticamente');
        this.saveData();
        console.log('✅ Demo data loaded:', this.contacts.length, 'contacts');
        
        // Show welcome banner
        setTimeout(() => {
            const welcomeBanner = document.getElementById('welcomeBanner');
            if (welcomeBanner) {
                welcomeBanner.style.display = 'block';
            }
        }, 500);
    }

    updateDashboard() {
        // Update statistics
        document.getElementById('totalContacts').textContent = this.contacts.length;
        document.getElementById('totalProperties').textContent = this.properties.filter(p => p.active !== false).length;
        document.getElementById('totalScheduled').textContent = this.contacts.filter(c => c.stage === 3).length;
        document.getElementById('totalClosed').textContent = this.contacts.filter(c => c.stage === 8).length;
    }

    renderActivities() {
        const container = document.getElementById('recentActivity');
        if (this.activities.length === 0) {
            container.innerHTML = '<p style="color: #94a3b8; text-align: center; padding: 40px;">Nenhuma atividade recente</p>';
            return;
        }

        container.innerHTML = this.activities.slice(-10).reverse().map(activity => `
            <div style="padding: 12px; border-left: 3px solid #6366f1; background: #f8fafc; margin-bottom: 8px; border-radius: 8px;">
                <div style="font-weight: 600; color: #1e293b;">${activity.action}</div>
                <div style="font-size: 0.875rem; color: #64748b;">${activity.details}</div>
                <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px;">${new Date(activity.timestamp).toLocaleString('pt-BR')}</div>
            </div>
        `).join('');
    }

    addActivity(action, details) {
        this.activities.push({
            action,
            details,
            timestamp: new Date().toISOString()
        });
        this.saveData();
        this.renderActivities();
    }

    // CONTACTS MANAGEMENT
    renderContacts() {
        const tbody = document.getElementById('contactsTableBody');
        
        if (this.contacts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: #94a3b8;">Nenhum contato ainda</td></tr>';
            return;
        }

        tbody.innerHTML = this.contacts.map((contact, index) => {
            const stageNames = [
                '', '1. Consulta Inicial', '2. Busca', '3. Tours', '4. Due Diligence',
                '5. Negociação', '6. Contrato', '7. Pagamento', '8. Entrega'
            ];
            
            return `
                <tr>
                    <td style="font-weight: 600;">${contact.name || '-'}</td>
                    <td>${contact.email || '-'}</td>
                    <td>${contact.phone || '-'}</td>
                    <td>
                        <select onchange="adminDashboard.updateContactStage(${index}, this.value)" style="padding: 6px 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem;">
                            ${stageNames.map((name, idx) => idx > 0 ? `<option value="${idx}" ${contact.stage === idx ? 'selected' : ''}>${name}</option>` : '').join('')}
                        </select>
                    </td>
                    <td style="font-size: 0.875rem; color: #64748b;">${new Date(contact.timestamp).toLocaleDateString('pt-BR')}</td>
                    <td>
                        <button class="btn btn-small btn-secondary" onclick="adminDashboard.viewContact(${index})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-small btn-danger" onclick="adminDashboard.deleteContact(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    updateContactStage(index, newStage) {
        const oldStage = this.contacts[index].stage;
        this.contacts[index].stage = parseInt(newStage);
        this.contacts[index].lastUpdated = new Date().toISOString();
        this.saveData();
        this.renderContacts();
        this.renderFunnel();
        this.updateDashboard();
        this.addActivity(
            'Contato movido no funil',
            `${this.contacts[index].name} movido da etapa ${oldStage} para ${newStage}`
        );
    }

    viewContact(index) {
        const contact = this.contacts[index];
        const modal = document.getElementById('contactModal');
        const body = document.getElementById('contactModalBody');
        
        const stageNames = [
            '', 'Consulta Inicial', 'Busca de Propriedades', 'Tours', 'Due Diligence',
            'Negociação', 'Contrato', 'Pagamento', 'Entrega'
        ];
        
        body.innerHTML = `
            <div style="display: grid; gap: 16px;">
                <div>
                    <strong>Nome:</strong> ${contact.name || '-'}
                </div>
                <div>
                    <strong>Email:</strong> ${contact.email || '-'}
                </div>
                <div>
                    <strong>Telefone:</strong> ${contact.phone || '-'}
                </div>
                <div>
                    <strong>Etapa Atual:</strong> <span class="badge badge-info">${stageNames[contact.stage]}</span>
                </div>
                <div>
                    <strong>Interesse:</strong> ${contact.interest || '-'}
                </div>
                <div>
                    <strong>Orçamento:</strong> ${contact.budget || '-'}
                </div>
                <div>
                    <strong>Data de Contato:</strong> ${new Date(contact.timestamp).toLocaleString('pt-BR')}
                </div>
                ${contact.scheduledDate ? `
                    <div>
                        <strong>Reunião Agendada:</strong> ${contact.scheduledDate} às ${contact.scheduledTime}
                    </div>
                ` : ''}
                ${contact.message ? `
                    <div>
                        <strong>Mensagem:</strong><br>
                        <div style="background: #f8fafc; padding: 12px; border-radius: 8px; margin-top: 8px;">
                            ${contact.message}
                        </div>
                    </div>
                ` : ''}
                <div>
                    <strong>Fonte:</strong> <span class="badge badge-success">${contact.source || 'chatbot'}</span>
                </div>
            </div>
        `;
        
        modal.classList.add('show');
    }

    deleteContact(index) {
        if (confirm('Tem certeza que deseja excluir este contato?')) {
            const contact = this.contacts[index];
            this.contacts.splice(index, 1);
            this.saveData();
            this.renderContacts();
            this.renderFunnel();
            this.updateDashboard();
            this.addActivity('Contato excluído', `${contact.name} foi removido do sistema`);
        }
    }

    // FUNNEL MANAGEMENT
    renderFunnel() {
        for (let stage = 1; stage <= 8; stage++) {
            const stageContacts = this.contacts.filter(c => c.stage === stage);
            document.getElementById(`stage${stage}Count`).textContent = stageContacts.length;
            
            const container = document.getElementById(`stage${stage}Leads`);
            
            // Add drag events to allow dropping
            container.ondragover = (e) => this.handleDragOver(e);
            container.ondragleave = (e) => this.handleDragLeave(e);
            container.ondrop = (e) => this.handleDrop(e, stage);
            
            if (stageContacts.length === 0) {
                container.innerHTML = '<p style="color: #94a3b8; text-align: center; padding: 20px; font-size: 0.875rem;">Nenhum lead</p>';
            } else {
                container.innerHTML = stageContacts.map((contact, index) => {
                    const globalIndex = this.contacts.findIndex(c => c === contact);
                    return `
                        <div class="lead-card" 
                             draggable="true" 
                             data-contact-index="${globalIndex}"
                             ondragstart="adminDashboard.handleDragStart(event, ${globalIndex})"
                             ondragend="adminDashboard.handleDragEnd(event)"
                             onclick="adminDashboard.viewContact(${globalIndex})">
                            <div class="lead-name">${contact.name || 'Sem nome'}</div>
                            <div class="lead-info">${contact.email || contact.phone || '-'}</div>
                            <div class="lead-date">${new Date(contact.timestamp).toLocaleDateString('pt-BR')}</div>
                        </div>
                    `;
                }).join('');
            }
        }
    }
    
    // DRAG AND DROP HANDLERS
    handleDragStart(event, contactIndex) {
        event.stopPropagation();
        this.draggedContactIndex = contactIndex;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', event.target.innerHTML);
        event.target.style.opacity = '0.4';
    }
    
    handleDragOver(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.dataTransfer.dropEffect = 'move';
        
        // Add visual feedback
        const container = event.currentTarget;
        if (container.classList.contains('funnel-leads')) {
            container.classList.add('drag-over');
        }
        
        return false;
    }
    
    handleDragLeave(event) {
        const container = event.currentTarget;
        if (container.classList.contains('funnel-leads')) {
            container.classList.remove('drag-over');
        }
    }
    
    handleDragEnd(event) {
        // Reset opacity when drag ends (whether dropped or cancelled)
        event.target.style.opacity = '1';
        
        // Remove drag-over class from all containers
        document.querySelectorAll('.funnel-leads').forEach(container => {
            container.classList.remove('drag-over');
        });
    }
    
    handleDrop(event, targetStage) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        event.preventDefault();
        
        // Remove visual feedback
        const container = event.currentTarget;
        if (container.classList.contains('funnel-leads')) {
            container.classList.remove('drag-over');
        }
        
        if (this.draggedContactIndex !== undefined) {
            const contact = this.contacts[this.draggedContactIndex];
            const oldStage = contact.stage;
            
            if (oldStage !== targetStage) {
                contact.stage = targetStage;
                contact.lastUpdated = new Date().toISOString();
                this.saveData();
                this.renderFunnel();
                this.renderContacts();
                this.updateDashboard();
                
                const stageNames = [
                    '', // index 0 (unused)
                    'Consulta Inicial',
                    'Descoberta',
                    'Tour Virtual',
                    'Visita Pessoal',
                    'Avaliação',
                    'Negociação',
                    'Due Diligence',
                    'Fechamento'
                ];
                
                this.addActivity(
                    'Lead movido no funil',
                    `${contact.name} foi movido de "${stageNames[oldStage]}" para "${stageNames[targetStage]}"`
                );
            } else {
                // If dropped in same stage, just re-render to reset opacity
                this.renderFunnel();
            }
            
            this.draggedContactIndex = undefined;
        }
        
        return false;
    }

    // PROPERTIES MANAGEMENT
    renderProperties() {
        const container = document.getElementById('propertiesList');
        
        if (this.properties.length === 0) {
            container.innerHTML = '<div class="card"><p style="text-align: center; padding: 40px; color: #94a3b8;">Nenhuma propriedade cadastrada</p></div>';
            return;
        }

        container.innerHTML = this.properties.map((property, index) => `
            <div class="property-item">
                <img src="${property.images && property.images[0] ? property.images[0] : 'https://via.placeholder.com/120x90'}" alt="${property.title}" class="property-image">
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <div class="property-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${property.location}</span>
                        <span><i class="fas fa-bed"></i> ${property.bedrooms} quartos</span>
                        <span><i class="fas fa-bath"></i> ${property.bathrooms} banheiros</span>
                        <span><i class="fas fa-ruler"></i> ${property.area} m²</span>
                    </div>
                    <div class="property-price">US$ ${property.price?.toLocaleString() || '0'}</div>
                    ${property.active === false ? '<span class="badge badge-danger">Inativa</span>' : '<span class="badge badge-success">Ativa</span>'}
                </div>
                <div class="property-actions">
                    <button class="btn btn-small btn-primary" onclick="adminDashboard.editProperty(${index})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="btn btn-small ${property.active === false ? 'btn-success' : 'btn-warning'}" onclick="adminDashboard.togglePropertyStatus(${index})">
                        <i class="fas fa-${property.active === false ? 'eye' : 'eye-slash'}"></i> ${property.active === false ? 'Ativar' : 'Desativar'}
                    </button>
                    <button class="btn btn-small btn-danger" onclick="adminDashboard.deleteProperty(${index})">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            </div>
        `).join('');
    }

    editProperty(index) {
        const property = this.properties[index];
        document.getElementById('propertyModalTitle').textContent = 'Editar Propriedade';
        document.getElementById('propertyId').value = index;
        document.getElementById('propertyTitle').value = property.title || '';
        document.getElementById('propertyLocation').value = property.locationSlug || '';
        document.getElementById('propertyType').value = property.type || '';
        document.getElementById('propertyPrice').value = property.price || '';
        document.getElementById('propertyBedrooms').value = property.bedrooms || '';
        document.getElementById('propertyBathrooms').value = property.bathrooms || '';
        document.getElementById('propertyArea').value = property.area || '';
        document.getElementById('propertyDescription').value = property.description || '';
        document.getElementById('propertyImages').value = property.images ? property.images.join('\n') : '';
        document.getElementById('qolSafety').value = property.qol?.safety || 5;
        document.getElementById('qolCost').value = property.qol?.cost || 5;
        document.getElementById('qolInternet').value = property.qol?.internet || 5;
        document.getElementById('qolCommunity').value = property.qol?.community || 5;
        document.getElementById('qolClimate').value = property.qol?.climate || 5;
        document.getElementById('propertyAmenities').value = property.amenities ? property.amenities.map(a => a.text).join(', ') : '';
        
        document.getElementById('propertyModal').classList.add('show');
    }

    togglePropertyStatus(index) {
        this.properties[index].active = !this.properties[index].active;
        this.saveData();
        this.renderProperties();
        this.updateDashboard();
        this.addActivity(
            'Status de propriedade alterado',
            `${this.properties[index].title} foi ${this.properties[index].active ? 'ativada' : 'desativada'}`
        );
    }

    deleteProperty(index) {
        if (confirm('Tem certeza que deseja excluir esta propriedade?')) {
            const property = this.properties[index];
            this.properties.splice(index, 1);
            this.saveData();
            this.renderProperties();
            this.updateDashboard();
            this.addActivity('Propriedade excluída', `${property.title} foi removida do sistema`);
        }
    }

    // AMENITIES MANAGEMENT
    renderAmenities() {
        const container = document.getElementById('amenitiesList');
        
        container.innerHTML = this.amenities.map((amenity, index) => `
            <div class="amenity-item" onclick="adminDashboard.toggleAmenitySelection(${index})">
                <span class="amenity-icon">${amenity.icon}</span>
                <span class="amenity-name">${amenity.text}</span>
                <button class="btn btn-small btn-danger" onclick="event.stopPropagation(); adminDashboard.deleteAmenity(${index})" style="margin-left: auto;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    deleteAmenity(index) {
        if (confirm('Tem certeza que deseja excluir esta amenity?')) {
            const amenity = this.amenities[index];
            this.amenities.splice(index, 1);
            this.saveData();
            this.renderAmenities();
            this.addActivity('Amenity excluída', `${amenity.text} foi removida`);
        }
    }

    // EXPORT
    exportContacts() {
        if (this.contacts.length === 0) {
            alert('Nenhum contato para exportar');
            return;
        }

        const stageNames = [
            '', 'Consulta Inicial', 'Busca de Propriedades', 'Tours', 'Due Diligence',
            'Negociação', 'Contrato', 'Pagamento', 'Entrega'
        ];

        const headers = ['Nome', 'Email', 'Telefone', 'Etapa', 'Interesse', 'Orçamento', 'Data Agendada', 'Hora', 'Mensagem', 'Data de Contato', 'Fonte'];
        const rows = this.contacts.map(contact => [
            contact.name || '',
            contact.email || '',
            contact.phone || '',
            stageNames[contact.stage] || '',
            contact.interest || '',
            contact.budget || '',
            contact.scheduledDate || '',
            contact.scheduledTime || '',
            contact.message || '',
            new Date(contact.timestamp).toLocaleString('pt-BR'),
            contact.source || 'chatbot'
        ]);

        const csv = [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');

        const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `contatos_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        this.addActivity('Contatos exportados', `${this.contacts.length} contatos exportados para CSV`);
    }
}

// Global functions
let adminDashboard;

window.onload = function() {
    adminDashboard = new AdminDashboard();
};

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Activate nav item
    event.target.closest('.nav-item').classList.add('active');
}

function refreshAll() {
    adminDashboard.loadData();
    adminDashboard.updateDashboard();
    adminDashboard.renderContacts();
    adminDashboard.renderFunnel();
    adminDashboard.renderProperties();
    adminDashboard.renderAmenities();
    adminDashboard.renderActivities();
    alert('Dados atualizados!');
}

function loadDemoData() {
    if (!confirm('Isso vai adicionar dados de demonstração. Continuar?')) return;
    
    // Add demo contacts
    const demoContacts = [
        {
            name: 'John Smith',
            email: 'john.smith@email.com',
            phone: '+1 555-0101',
            stage: 1,
            interest: 'Florianópolis',
            budget: '$500,000 - $800,000',
            timestamp: new Date(Date.now() - 86400000).toISOString(),
            source: 'chatbot'
        },
        {
            name: 'Maria Santos',
            email: 'maria.santos@email.com',
            phone: '+55 11 98765-4321',
            stage: 3,
            interest: 'Balneário Camboriú',
            budget: '$800,000+',
            scheduledDate: '2024-11-20',
            scheduledTime: '14:00',
            timestamp: new Date(Date.now() - 172800000).toISOString(),
            source: 'website'
        },
        {
            name: 'David Johnson',
            email: 'david.j@email.com',
            phone: '+1 555-0202',
            stage: 5,
            interest: 'Curitiba',
            budget: '$300,000 - $500,000',
            timestamp: new Date(Date.now() - 259200000).toISOString(),
            source: 'chatbot'
        },
        {
            name: 'Ana Silva',
            email: 'ana.silva@email.com',
            phone: '+55 48 99999-8888',
            stage: 7,
            interest: 'Florianópolis',
            budget: '$500,000 - $800,000',
            timestamp: new Date(Date.now() - 345600000).toISOString(),
            source: 'referral',
            message: 'Adorei os imóveis!'
        }
    ];
    
    adminDashboard.contacts = [...adminDashboard.contacts, ...demoContacts];
    adminDashboard.saveData();
    adminDashboard.updateDashboard();
    adminDashboard.renderContacts();
    adminDashboard.renderFunnel();
    adminDashboard.addActivity('Dados demo carregados', `${demoContacts.length} contatos de demonstração adicionados`);
    
    alert('Dados de demonstração carregados com sucesso!');
}

function filterContacts() {
    const searchTerm = document.getElementById('contactSearch').value.toLowerCase();
    const stageFilter = document.getElementById('contactStageFilter').value;
    
    const rows = document.querySelectorAll('#contactsTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const stageSelect = row.querySelector('select');
        const stageValue = stageSelect ? stageSelect.value : '';
        
        const matchesSearch = text.includes(searchTerm);
        const matchesStage = !stageFilter || stageValue === stageFilter;
        
        row.style.display = matchesSearch && matchesStage ? '' : 'none';
    });
}

// Property Modal
function openAddPropertyModal() {
    document.getElementById('propertyModalTitle').textContent = 'Nova Propriedade';
    document.getElementById('propertyForm').reset();
    document.getElementById('propertyId').value = '';
    document.getElementById('propertyModal').classList.add('show');
}

function closePropertyModal() {
    document.getElementById('propertyModal').classList.remove('show');
}

function saveProperty() {
    const form = document.getElementById('propertyForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const propertyId = document.getElementById('propertyId').value;
    const isEdit = propertyId !== '';
    
    const images = document.getElementById('propertyImages').value
        .split('\n')
        .map(url => url.trim())
        .filter(url => url);
    
    const amenitiesText = document.getElementById('propertyAmenities').value
        .split(',')
        .map(a => a.trim())
        .filter(a => a);
    
    const amenities = amenitiesText.map(text => {
        const found = adminDashboard.amenities.find(a => a.text.toLowerCase() === text.toLowerCase());
        return found || { icon: '✓', text };
    });
    
    const property = {
        id: isEdit ? adminDashboard.properties[propertyId].id : Date.now(),
        title: document.getElementById('propertyTitle').value,
        location: document.getElementById('propertyLocation').selectedOptions[0].text,
        locationSlug: document.getElementById('propertyLocation').value,
        type: document.getElementById('propertyType').value,
        price: parseInt(document.getElementById('propertyPrice').value),
        priceBRL: parseInt(document.getElementById('propertyPrice').value) * 5,
        bedrooms: parseInt(document.getElementById('propertyBedrooms').value),
        bathrooms: parseInt(document.getElementById('propertyBathrooms').value),
        area: parseInt(document.getElementById('propertyArea').value),
        description: document.getElementById('propertyDescription').value,
        images: images.length > 0 ? images : ['https://via.placeholder.com/1200x800'],
        amenities: amenities,
        qol: {
            overall: 0,
            safety: parseInt(document.getElementById('qolSafety').value),
            cost: parseInt(document.getElementById('qolCost').value),
            internet: parseInt(document.getElementById('qolInternet').value),
            community: parseInt(document.getElementById('qolCommunity').value),
            climate: parseInt(document.getElementById('qolClimate').value)
        },
        lifestyle: [],
        featured: false,
        active: true,
        createdAt: isEdit ? adminDashboard.properties[propertyId].createdAt : new Date().toISOString()
    };
    
    // Calculate overall QoL
    property.qol.overall = ((property.qol.safety + property.qol.cost + property.qol.internet + property.qol.community + property.qol.climate) / 5).toFixed(1);
    
    if (isEdit) {
        adminDashboard.properties[propertyId] = property;
        adminDashboard.addActivity('Propriedade atualizada', `${property.title} foi editada`);
    } else {
        adminDashboard.properties.push(property);
        adminDashboard.addActivity('Propriedade adicionada', `${property.title} foi criada`);
    }
    
    adminDashboard.saveData();
    adminDashboard.renderProperties();
    adminDashboard.updateDashboard();
    closePropertyModal();
}

// Amenity Modal
function openAddAmenityModal() {
    document.getElementById('amenityModal').classList.add('show');
}

function closeAmenityModal() {
    document.getElementById('amenityModal').classList.remove('show');
    document.getElementById('amenityIcon').value = '';
    document.getElementById('amenityName').value = '';
}

function saveAmenity() {
    const icon = document.getElementById('amenityIcon').value.trim();
    const name = document.getElementById('amenityName').value.trim();
    
    if (!icon || !name) {
        alert('Preencha todos os campos');
        return;
    }
    
    adminDashboard.amenities.push({ icon, text: name });
    adminDashboard.saveData();
    adminDashboard.renderAmenities();
    adminDashboard.addActivity('Amenity adicionada', `${name} foi criada`);
    closeAmenityModal();
}

// Contact Modal
function closeContactModal() {
    document.getElementById('contactModal').classList.remove('show');
}

// Close modals on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}
