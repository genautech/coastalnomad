@echo off
REM Script de Deploy Automático - CoastalNomad (Windows)
REM Uso: Clique duas vezes neste arquivo ou execute: deploy.bat

echo.
echo ============================================
echo   Deploy Automatico - CoastalNomad
echo ============================================
echo.

REM Verifica se está na pasta correta
if not exist ".git" (
    echo [ERRO] Voce nao esta na pasta do repositorio Git!
    echo.
    echo Execute: cd coastalnomad
    echo.
    pause
    exit /b 1
)

echo [OK] Repositorio Git encontrado
echo.

REM Mostra status
echo Status atual dos arquivos:
echo -------------------------------------------
git status --short
echo.

REM Pergunta se quer continuar
set /p continuar="Deseja fazer o deploy? (S/N): "
if /i not "%continuar%"=="S" (
    echo.
    echo Deploy cancelado
    pause
    exit /b 0
)

echo.
echo Adicionando arquivos...
git add .
echo [OK] Arquivos adicionados
echo.

REM Pede mensagem de commit
set /p commit_msg="Mensagem do commit (Enter para usar padrao): "
if "%commit_msg%"=="" set commit_msg=Fix: Update properties and property pages

echo.
echo Fazendo commit...
git commit -m "%commit_msg%"
echo [OK] Commit realizado
echo.

echo Enviando para o GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo [AVISO] Push para 'main' falhou, tentando 'master'...
    git push origin master
)

if errorlevel 1 (
    echo.
    echo ============================================
    echo   [ERRO] Falha no Deploy
    echo ============================================
    echo.
    echo Tente manualmente:
    echo   git add .
    echo   git commit -m "Fix properties"
    echo   git push origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Deploy Concluido com Sucesso!
echo ============================================
echo.
echo AGUARDE 5-10 MINUTOS para o GitHub Pages atualizar
echo.
echo Depois teste em:
echo   Verificacao: https://genautech.github.io/coastalnomad/verify.html
echo   Propriedades: https://genautech.github.io/coastalnomad/properties.html
echo.
echo Nao esqueca de limpar o cache: Ctrl + Shift + R
echo.
pause
