# 🤖 Chatbot & Admin Panel - Quick Start Guide

## 🎯 What's New

Your CoastalNomad platform now includes:

1. **AI Chatbot** - Available on every page for instant lead capture
2. **Admin Panel** - Complete lead management and conversion funnel
3. **Lighter Typography** - Changed to Poppins/Quicksand for more lifestyle-focused feel

---

## 💬 Chatbot Features

### Where to Find It
- **Every page** has a floating chat button in the bottom-right corner
- Click the button to open the chat interface

### What It Does
1. **Welcome Message** - Greets visitors in Portuguese/English
2. **Quick Replies** - Pre-set options:
   - 🏠 Ver Imóveis (See Properties)
   - 📅 Agendar Reunião (Schedule Meeting)
   - 💰 Calcular Custos (Calculate Costs)
   - ℹ️ Mais Informações (More Info)

3. **Property Showcase** - Browse properties directly in chat
4. **Lead Capture** - Collects name, email, phone
5. **Calendar Scheduling** - Interactive date/time picker
6. **Conversation History** - Saved in LocalStorage

### Testing the Chatbot
1. Open any page (e.g., `index.html`)
2. Click the floating green chat button (bottom-right)
3. Try different conversation flows:
   - View properties
   - Schedule a meeting (pick date & time)
   - Provide contact info
   - See how data is captured

---

## 🛡️ Admin Panel Features

### How to Access
- Open `admin.html` directly
- Or click "Admin" link in footer (subtle, bottom of any main page)

### Dashboard Overview
- **Total Leads** - Count of captured leads
- **Scheduled Meetings** - Leads with calendar bookings
- **Total Properties** - Properties in system
- **Total Conversations** - Chatbot interactions

### Main Tabs

#### 1️⃣ Leads & Conversations
- **Leads Table**:
  - View all captured leads
  - Search by name, email, or phone
  - Update lead status (dropdown)
  - View details (modal)
  - Delete leads
- **Export to CSV**: Download all leads

#### 2️⃣ Conversion Funnel
6-stage visual pipeline:
- 🎯 **Novos Contatos** (New)
- 📞 **Primeiro Contato** (Contacted)
- 📅 **Reunião Agendada** (Scheduled)
- 🏠 **Visita Realizada** (Visited)
- 💰 **Negociação** (Negotiating)
- ✅ **Fechado** (Closed)

**How to use:**
- Leads appear as cards in their current stage
- Change status in Leads table to move between stages
- Visual overview of entire sales pipeline

#### 3️⃣ Add Property
Complete form to add new properties:
- Basic info (title, location, type, price)
- Details (bedrooms, bathrooms, area)
- Quality of Life scores (5 metrics, 0-10)
- Description
- Image URLs (one per line)
- Amenities (comma-separated)

#### 4️⃣ Conversation History
- View all chatbot conversations
- See message timelines
- Identify which conversations captured leads

### Utility Buttons (Top-Right)
- **Voltar ao Site** - Back to main website
- **Atualizar** - Refresh data
- **Dados Demo** - Load sample data for testing

---

## 🧪 Testing Workflow

### Complete Test Scenario

1. **Open Homepage**
   ```
   Open: index.html
   ```

2. **Test Chatbot**
   - Click floating chat button
   - Select "🏠 Ver Imóveis"
   - Browse properties in chat
   - Select "📅 Agendar Reunião"
   - Fill in name: "John Smith"
   - Fill in email: "john@example.com"
   - Fill in phone: "+1 555-0101"
   - Select date and time
   - Complete conversation

3. **Open Admin Panel**
   ```
   Open: admin.html
   ```

4. **Load Demo Data** (Optional)
   - Click "Dados Demo" button
   - See 5 sample leads appear
   - See statistics update

5. **Manage Leads**
   - View leads in table
   - Click "Ver Detalhes" to see full info
   - Change status dropdown to move through funnel
   - Check conversion funnel tab to see visual pipeline

6. **Export Leads**
   - Click "Exportar Leads" button
   - CSV file downloads with all lead data

7. **Add Property**
   - Go to "Adicionar Imóvel" tab
   - Fill out form with property details
   - Submit to add to system

---

## 📊 Data Storage

All data is stored in **browser LocalStorage**:

### Keys
- `chatbot_leads` - All captured leads
- `chatbot_conversations` - Chat history
- `admin_properties` - Properties added via admin

### To View Data
Open browser console (F12) and run:
```javascript
// View all leads
console.log(JSON.parse(localStorage.getItem('chatbot_leads')))

// View conversations
console.log(JSON.parse(localStorage.getItem('chatbot_conversations')))

// View properties
console.log(JSON.parse(localStorage.getItem('admin_properties')))
```

### To Clear Data
```javascript
localStorage.clear()
```

---

## 🎨 Design Changes

### Typography Update
- **Old**: Inter + Playfair Display (traditional real estate feel)
- **New**: Poppins + Quicksand (lighter, lifestyle-focused, more modern)

### Applied To
- All HTML pages updated with new font imports
- CSS variables updated in `style.css`
- More breathable, friendly, and approachable feel

---

## 🚀 Next Steps for Production

### Immediate Enhancements
1. **Backend Integration**
   - Replace LocalStorage with Supabase/Firebase
   - Add email notifications for new leads
   - Set up automated follow-ups

2. **Chatbot Improvements**
   - Integrate GPT for intelligent responses
   - Add WhatsApp Business API
   - Multi-language toggle

3. **Admin Panel**
   - Add user authentication
   - Email templates for lead nurturing
   - Team member assignment
   - Activity log

### Marketing Integration
- Connect to CRM (HubSpot, Salesforce)
- Add Google Analytics tracking
- Set up Facebook Pixel
- Create email marketing campaigns

---

## 📞 Contact & Support

**For Rodrigo Torrezan:**
- The chatbot captures leads 24/7
- Access admin panel anytime to manage leads
- Export leads to CSV for use in other tools
- All conversations are saved for review

**Built with ❤️ for digital nomads** 🏖️

Ready to generate leads and close deals! 🚀
