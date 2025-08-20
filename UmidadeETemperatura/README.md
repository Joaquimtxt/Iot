# Monitor IoT - Temperatura e Umidade

Um projeto completo de monitoramento IoT que coleta dados de temperatura e umidade usando sensor DHT22 e exibe os dados em tempo real através de uma interface web moderna desenvolvida em React.

## 📋 Descrição do Projeto

Este sistema é composto por duas partes principais:

1. **Sensor DHT22 (ESP32)**: Coleta dados de temperatura e umidade e os envia via MQTT
2. **Interface Web (React)**: Exibe os dados em tempo real com estatísticas e controles visuais

### 🌡️ Sensor de Temperatura e Umidade

O projeto utiliza um **sensor DHT22** conectado a um **ESP32** para monitoramento ambiental:

- **Sensor DHT22**: Sensor digital de alta precisão para temperatura e umidade
  - Faixa de temperatura: -40°C a +80°C (±0.5°C de precisão)
  - Faixa de umidade: 0-100% RH (±2-5% de precisão)
  - Interface digital de 1 fio
  - Baixo consumo de energia

- **ESP32**: Microcontrolador com WiFi integrado
  - Conecta à rede WiFi
  - Publica dados via protocolo MQTT
  - Envia dados a cada 5 segundos no tópico `Jg/temperatura`

### 📱 Interface Web React

A interface web oferece:

- **Visualização em tempo real** dos dados de temperatura e umidade
- **Estatísticas da sessão** (mínimo, máximo, média)
- **Tema claro/escuro** com persistência no localStorage
- **Indicadores de conexão** MQTT em tempo real
- **Design responsivo** compatível com dispositivos móveis
- **Animações suaves** e feedback visual

## 🚀 Como Executar o Projeto React

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conexão com internet (para broker MQTT)

### 1. Instalação das Dependências

```bash
# Clone ou baixe o projeto
cd UmidadeETemperatura

# Instale as dependências
npm install
```

### 2. Configuração do Sensor (Opcional)
Se você tiver o hardware físico:

Configure o ESP32 com o código do sensor
Conecte o DHT22 ao pino especificado
Certifique-se de que está publicando no tópico Jg/temperatura
Para teste, você pode usar o simulador: Wokwi - Simulador DHT22

3. Executar em Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento
npm run dev 
```
O projeto será aberto automaticamente no navegador em http://localhost:3000

### 4. Build para Produção
```bash
# Gera build otimizado para produção
npm run build

# Visualiza o build de produção
npm run preview
```
### 5. Linting
```bash
# Executa verificação de código
npm run lint
```
🛠️ Tecnologias Utilizadas
Frontend
React 19.1.1 - Biblioteca JavaScript para interfaces
Vite - Build tool moderna e rápida
Bootstrap 5.3.7 - Framework CSS responsivo
Font Awesome - Ícones vetoriais
Paho MQTT - Cliente MQTT para JavaScript
Ferramentas de Desenvolvimento
ESLint - Linter para JavaScript/React
SWC - Compilador super rápido para React

### 📁 Estrutura do Projeto
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Cabeçalho com controle de tema
│   ├── SensorCard.jsx  # Card para exibir dados do sensor
│   ├── StatsCard.jsx   # Card de estatísticas
│   └── ConnectionInfo.jsx # Informações de conexão MQTT
├── contexts/           # Contextos React
│   ├── ThemeContext.jsx # Provider do tema
│   └── ThemeContextInstance.js # Instância do contexto
├── hooks/             # Hooks customizados
│   ├── useMQTT.js    # Hook para conexão MQTT
│   └── useTheme.js   # Hook para controle de tema
├── App.jsx           # Componente principal
├── App.css          # Estilos principais
└── main.jsx         # Ponto de entrada

### 🔧 Configurações MQTT
O projeto está configurado para usar o broker público HiveMQ:

Broker: broker.hivemq.com
Porta: 8884 (WSS - WebSocket Secure)
Tópico: Jg/temperatura
Protocolo: MQTT over WebSocket com SSL
Formato dos Dados
O sensor deve enviar dados no formato JSON:

```json
{
  "temperatura": 25.6,
  "umidade": 60.2
}
```
### 🎨 Recursos da Interface
Temas
Tema Claro: Gradiente azul/roxo com cards claros
Tema Escuro: Gradiente escuro com elementos translúcidos
Persistência: Preferência salva no localStorage
Detecção Automática: Usa preferência do sistema como padrão
Indicadores Visuais
Status de Conexão: Indicador em tempo real da conexão MQTT
Últimas Leituras: Timestamp da última atualização
Animações: Pulsos e transições suaves
Responsividade: Layout adaptável para mobile/desktop
Estatísticas
Valores Mínimos/Máximos: Por sessão
Médias: Calculadas em tempo real
Contador de Leituras: Total de dados recebidos
Reset Manual: Botão para limpar estatísticas
### 🔍 Solução de Problemas
Problemas de Conexão MQTT
Verifique sua conexão com internet
Certifique-se de que o broker está acessível
Verifique se o tópico está correto
Sensor não Enviando Dados
Verifique a conexão WiFi do ESP32
Confirme se o código do sensor está correto
Use o simulador Wokwi para testes
Interface não Atualiza
Abra o Console do navegador (F12)
Verifique se há erros de conexão MQTT
Certifique-se de que o formato JSON está correto


### 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para:

Reportar bugs
Sugerir melhorias
Enviar pull requests
Compartilhar ideias