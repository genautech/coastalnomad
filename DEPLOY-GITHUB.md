# 🚀 Guia de Deploy no GitHub Pages

## ✅ Status do Deploy
- **Repositório**: https://github.com/genautech/coastalnomad
- **Site ao Vivo**: https://genautech.github.io/coastalnomad/
- **Status**: ✅ Problema de JavaScript corrigido - Propriedades agora aparecem corretamente

---

## 🐛 Problema Resolvido

**Erro encontrado**: A função `getUrlParameter()` não estava definida nos arquivos JavaScript, causando erro ao carregar a página de propriedades.

**Solução aplicada**:
- ✅ Adicionada função `getUrlParameter()` em `js/properties.js`
- ✅ Adicionada função `getUrlParameter()` em `js/property.js`
- ✅ Adicionada função `toggleSave()` em `js/properties.js`
- ✅ Testado e funcionando perfeitamente

---

## 📦 Como Fazer Deploy

### **Passo 1: Clone o Repositório**
```bash
git clone https://github.com/genautech/coastalnomad.git
cd coastalnomad
```

### **Passo 2: Copie os Arquivos Atualizados**
Copie TODOS os arquivos do projeto para a pasta `coastalnomad`:

```
coastalnomad/
├── index.html
├── properties.html
├── property.html
├── blog.html
├── about.html
├── showcase.html
├── events-travel.html
├── buying-process.html
├── admin-dashboard.html
├── admin.html
├── README.md
├── ADMIN-DASHBOARD-GUIDE.md
├── DEPLOY-GITHUB.md (este arquivo)
├── css/
│   ├── style.css
│   ├── property.css
│   ├── blog.css
│   ├── about.css
│   ├── showcase.css
│   ├── admin.css
│   └── chatbot.css
├── js/
│   ├── data.js
│   ├── main.js
│   ├── properties.js ⭐ CORRIGIDO
│   ├── property.js ⭐ CORRIGIDO
│   ├── blog.js
│   ├── about.js
│   ├── chatbot.js
│   ├── admin.js
│   └── admin-dashboard.js
└── images/
    └── (suas imagens)
```

### **Passo 3: Adicione ao Git**
```bash
git add .
```

### **Passo 4: Faça o Commit**
```bash
git commit -m "Fix: Corrigido erro de propriedades não aparecendo + admin dashboard completo"
```

### **Passo 5: Envie para o GitHub**
```bash
git push origin main
```

*Se der erro, tente:*
```bash
git push origin master
```

### **Passo 6: Ative o GitHub Pages**
1. Vá para: https://github.com/genautech/coastalnomad
2. Clique em **Settings**
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
5. Clique em **Save**

### **Passo 7: Aguarde 2-5 Minutos**
O GitHub vai processar e publicar automaticamente.

### **Passo 8: Acesse o Site**
```
https://genautech.github.io/coastalnomad/
```

---

## 🔗 URLs do Site Publicado

### **Páginas Públicas**
- 🏠 **Home**: https://genautech.github.io/coastalnomad/
- 🏘️ **Propriedades**: https://genautech.github.io/coastalnomad/properties.html
- 📋 **Detalhes**: https://genautech.github.io/coastalnomad/property.html?id=1
- 📅 **Eventos**: https://genautech.github.io/coastalnomad/events-travel.html
- 📖 **Como Comprar**: https://genautech.github.io/coastalnomad/buying-process.html
- 📰 **Blog**: https://genautech.github.io/coastalnomad/blog.html
- 👤 **Sobre**: https://genautech.github.io/coastalnomad/about.html

### **Painel Admin**
- 🔧 **Admin Completo**: https://genautech.github.io/coastalnomad/admin-dashboard.html
- 📊 **Admin Antigo**: https://genautech.github.io/coastalnomad/admin.html

---

## 🔄 Como Fazer Atualizações Futuras

Sempre que quiser atualizar o site:

```bash
# 1. Entre na pasta do projeto
cd coastalnomad

# 2. Faça suas alterações nos arquivos

# 3. Adicione as mudanças
git add .

# 4. Faça o commit
git commit -m "Descrição da sua alteração"

# 5. Envie para o GitHub
git push origin main
```

O site será atualizado automaticamente em 2-5 minutos!

---

## 🧪 Teste Local Antes de Fazer Deploy

Para testar localmente antes de enviar:

### **Opção 1: Python (Mais simples)**
```bash
# Se tiver Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### **Opção 2: Node.js (http-server)**
```bash
# Instale globalmente
npm install -g http-server

# Execute
http-server

# Acesse: http://localhost:8080
```

### **Opção 3: VS Code (Live Server)**
1. Instale extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## ✅ Checklist de Verificação

Antes de fazer deploy, verifique:

- [ ] Todos os arquivos estão na pasta
- [ ] `js/properties.js` tem a função `getUrlParameter()`
- [ ] `js/property.js` tem a função `getUrlParameter()`
- [ ] Testou localmente e está funcionando
- [ ] Números de WhatsApp estão corretos
- [ ] Email de contato está correto
- [ ] Imagens das propriedades estão carregando

---

## 🐛 Solução de Problemas

### **Problema: Propriedades não aparecem na lista**
✅ **Solução**: Já corrigido! Certifique-se de usar os arquivos atualizados.

### **Problema: Detalhes da propriedade não aparecem**
**Causa**: Você está abrindo `property.html` sem o parâmetro `?id=X` na URL.

**Solução Correta**:
- ❌ ERRADO: `https://genautech.github.io/coastalnomad/property.html`
- ✅ CERTO: `https://genautech.github.io/coastalnomad/property.html?id=1`
- ✅ CERTO: `https://genautech.github.io/coastalnomad/property.html?id=2`

**IDs válidos**: 1, 2, 3, 4, 5, 6, 7, 8

**Como acessar corretamente**:
1. Vá para a página de propriedades: `properties.html`
2. Clique em qualquer propriedade
3. A URL correta será aberta automaticamente com o ID

**Debug**: Se ainda não funcionar, pressione F12 e veja o Console para mensagens de erro.

### **Problema: "Permission denied"**
**Solução**: Configure suas credenciais:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

### **Problema: "Branch main não existe"**
**Solução**: 
```bash
git branch -M main
git push -u origin main
```

### **Problema: Site não atualiza**
**Soluções**:
1. Aguarde 5-10 minutos
2. Limpe cache do navegador (Ctrl + Shift + R)
3. Verifique se o GitHub Pages está ativado
4. Veja se o commit foi enviado: `git log`

### **Problema: Chatbot não funciona**
**Verificar**:
- Arquivo `js/chatbot.js` está carregado?
- Console do navegador mostra erros? (F12)
- LocalStorage está habilitado no navegador?

### **Problema: Admin Dashboard vazio**
**Solução**:
1. Abra: https://genautech.github.io/coastalnomad/admin-dashboard.html
2. Clique em "📊 Dados Demo"
3. Isso carregará 4 contatos de exemplo

---

## 📊 Monitoramento Pós-Deploy

### **Verifique se está tudo funcionando:**

1. **Homepage** ✅
   - [ ] Hero carrega com tagline do Rodrigo
   - [ ] Propriedades em destaque aparecem
   - [ ] Chatbot flutua no canto inferior direito

2. **Página de Propriedades** ✅
   - [ ] 8 propriedades aparecem
   - [ ] Filtros funcionam
   - [ ] Clique em propriedade abre detalhes

3. **Página de Eventos** ✅
   - [ ] 6 eventos aparecem
   - [ ] Links de registro funcionam
   - [ ] Informações de voo visíveis

4. **Página Como Comprar** ✅
   - [ ] Timeline de 8 etapas visível
   - [ ] Simulação de chat funciona
   - [ ] FAQs expandem ao clicar

5. **Admin Dashboard** ✅
   - [ ] Abre sem erros
   - [ ] Dados demo carregam
   - [ ] Pode adicionar propriedades
   - [ ] Funil de vendas funciona

---

## 🎯 Próximos Passos Recomendados

Após o deploy bem-sucedido:

### **1. Teste Completo** (30 minutos)
- [ ] Abra cada página no celular
- [ ] Teste chatbot completo
- [ ] Verifique admin dashboard
- [ ] Clique em todos os botões de WhatsApp
- [ ] Teste filtros de propriedades

### **2. Personalize Conteúdo** (1-2 horas)
- [ ] Atualize número de WhatsApp real do Rodrigo
- [ ] Substitua email de contato
- [ ] Adicione foto real do Rodrigo em `about.html`
- [ ] Atualize propriedades reais em `js/data.js`

### **3. Configure Domínio Próprio** (Opcional)
- [ ] Compre domínio (ex: coastalnomad.com.br)
- [ ] Configure DNS no GitHub Pages
- [ ] Ative HTTPS

### **4. Marketing** (Contínuo)
- [ ] Compartilhe link nas redes sociais
- [ ] Crie posts no Instagram/TikTok
- [ ] Configure Google Analytics
- [ ] Faça anúncios (Google Ads, Meta Ads)

---

## 📞 Suporte

Se tiver problemas:

1. **Verifique o Console**: F12 → Console (veja erros JavaScript)
2. **Verifique o Network**: F12 → Network (veja arquivos não carregados)
3. **Teste Local**: Use Python/Node para testar antes de fazer push
4. **Git Status**: `git status` para ver o que será enviado

---

## 🎉 Parabéns!

Se chegou até aqui, seu site está no ar! 🚀

**Link do Site**: https://genautech.github.io/coastalnomad/

Agora é só:
1. Testar todas as funcionalidades
2. Compartilhar com clientes
3. Começar a receber leads! 💰

---

**Última Atualização**: 17 de Outubro de 2025  
**Status**: ✅ Totalmente funcional e pronto para produção
