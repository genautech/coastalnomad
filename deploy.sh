#!/bin/bash

# Script de Deploy Automático - CoastalNomad
# Uso: bash deploy.sh

echo "🚀 Iniciando deploy do CoastalNomad..."
echo ""

# Verifica se está na pasta correta
if [ ! -d ".git" ]; then
    echo "❌ ERRO: Você não está na pasta do repositório Git!"
    echo "💡 Execute: cd coastalnomad"
    exit 1
fi

echo "✅ Repositório Git encontrado"
echo ""

# Mostra status
echo "📊 Status atual dos arquivos:"
git status --short
echo ""

# Pergunta se quer continuar
read -p "❓ Deseja adicionar e fazer commit de todos os arquivos? (s/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[SsYy]$ ]]; then
    echo "❌ Deploy cancelado"
    exit 1
fi

# Adiciona todos os arquivos
echo "📁 Adicionando arquivos..."
git add .
echo "✅ Arquivos adicionados"
echo ""

# Pede mensagem de commit
read -p "📝 Mensagem do commit (Enter para usar padrão): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="Fix: Update properties and property pages"
fi

# Faz commit
echo "💾 Fazendo commit..."
git commit -m "$commit_msg"
echo "✅ Commit realizado"
echo ""

# Faz push
echo "📤 Enviando para o GitHub..."
git push origin main

if [ $? -ne 0 ]; then
    echo "⚠️ Push para 'main' falhou, tentando 'master'..."
    git push origin master
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy concluído com sucesso!"
    echo ""
    echo "⏰ AGUARDE 5-10 MINUTOS para o GitHub Pages atualizar"
    echo ""
    echo "🔗 Depois teste em:"
    echo "   📋 Verificação: https://genautech.github.io/coastalnomad/verify.html"
    echo "   🏠 Propriedades: https://genautech.github.io/coastalnomad/properties.html"
    echo ""
    echo "💡 Não esqueça de limpar o cache: Ctrl + Shift + R"
else
    echo ""
    echo "❌ Erro no deploy!"
    echo "💡 Tente manualmente:"
    echo "   git add ."
    echo "   git commit -m 'Fix properties'"
    echo "   git push origin main"
fi
