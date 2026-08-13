// Configuración
const WORKER_URL = 'https://astrobot-proxy.[usuario].workers.dev'
const STORAGE_KEY = 'astrobot_data'

// Estado global
const state = {
  messages: [],
  gameScore: 0,
  gameQuestion: 0,
  gameHistory: [],
  userProgress: {}
}

// Funciones principales
async function sendMessage(userMessage) { /* ... */ }
function addMessage(text, sender) { /* ... */ }
function showTypingIndicator() { /* ... */ }
function generateSummary(topic) { /* ... */ }
function downloadPDF(content, title) { /* ... */ }
function startGame() { /* ... */ }
function checkAnswer(selected) { /* ... */ }
function saveProgress() { /* ... */ }
function loadProgress() { /* ... */ }
function registerServiceWorker() { /* ... */ }
