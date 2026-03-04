# 📝 Multi Notes Pro

![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green)
![Edge Compatible](https://img.shields.io/badge/Edge-Compatible-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Extensão para **Google Chrome** e **Microsoft Edge** que funciona como um bloco de notas moderno com suporte a múltiplas notas e captura de tela da aba ativa.

---

## 📌 Visão Geral

**Multi Notes Pro** foi desenvolvido para fornecer um ambiente simples e rápido para:

* Criar múltiplas notas
* Salvar automaticamente
* Alternar entre notas
* Capturar a aba ativa
* Salvar capturas com nome automático (data e hora)

Tudo isso funcionando **offline**, utilizando apenas recursos nativos da API de extensões (Manifest V3).

---

## 🚀 Funcionalidades

### 📝 Gestão de Notas

* Criação ilimitada de notas
* Salvamento automático em tempo real
* Título gerado automaticamente pela primeira linha
* Exclusão de notas
* Persistência local via `chrome.storage.local`

### 📸 Captura de Tela

* Captura da aba ativa
* Geração automática de nome no formato:

```
captura_YYYY-MM-DD_HH-MM.png
```

Exemplo:

```
captura_2026-03-04_15-47.png
```

* Salvamento automático na pasta padrão de Downloads

---

## 🧱 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Chrome Extensions API (Manifest V3)

APIs utilizadas:

* `chrome.storage`
* `chrome.tabs`
* `chrome.downloads`
* `chrome.tabs.captureVisibleTab`

---

## 📂 Estrutura do Projeto

```
notepad-extension/
│
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
└── README.md
```

---

## ⚙️ Instalação (Modo Desenvolvedor)

### 🔹 Google Chrome

1. Acesse:

   ```
   chrome://extensions/
   ```
2. Ative **Modo Desenvolvedor**
3. Clique em **Carregar sem compactação**
4. Selecione a pasta do projeto

---

### 🔹 Microsoft Edge

1. Acesse:

   ```
   edge://extensions/
   ```
2. Ative **Modo Desenvolvedor**
3. Clique em **Carregar sem compactação**
4. Selecione a pasta do projeto

---

## 🔐 Permissões

| Permissão   | Finalidade              |
| ----------- | ----------------------- |
| `storage`   | Salvar notas localmente |
| `tabs`      | Acessar aba ativa       |
| `activeTab` | Permitir captura da aba |
| `downloads` | Salvar imagem capturada |

---

## 🧠 Como Funciona

### Armazenamento

As notas são salvas utilizando:

```javascript
chrome.storage.local
```

Os dados permanecem salvos mesmo após fechar o navegador.

---

### Captura de Tela

A captura é feita com:

```javascript
chrome.tabs.captureVisibleTab()
```

E salva utilizando:

```javascript
chrome.downloads.download()
```

O nome do arquivo é gerado dinamicamente com base na data e hora atual.

---

## ⚠️ Observações Importantes

* A extensão funciona totalmente offline
* As notas são armazenadas apenas localmente
* Ao remover a extensão, os dados são apagados
* A imagem será aberta pelo visualizador padrão do sistema (ex: Paint no Windows)

---

## 🔮 Roadmap

Próximas melhorias planejadas:

* 🔍 Busca de notas
* 📂 Organização por pastas
* 🔒 Proteção por senha
* ☁️ Sincronização em nuvem
* 🖊️ Editor de imagem integrado
* 📋 Copiar captura direto para clipboard
* 🌙 Alternância de tema claro/escuro
* 📦 Publicação na Chrome Web Store

---

## 🧪 Status do Projeto

Em desenvolvimento ativo 🚀
Versão atual: 2.0

---

## 👨‍💻 Autor

**Emanuel Zua**

Desenvolvedor focado em tecnologia, dados e soluções práticas.
Projeto criado para estudo e evolução técnica em desenvolvimento de extensões Chrome (Manifest V3).

---

## 📄 Licença

Distribuído sob licença MIT.
Livre para uso, modificação e melhoria.
