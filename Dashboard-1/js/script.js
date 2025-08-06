const brokerUrl = "wss://broker.hivemq.com:8884/mqtt";


// 📡 Tópicos MQTT utilizados no projeto
const topicoSensor = "joca/lerSensor";  // Tópico que envia dados do sensor
const topicoLed1 = "joca/led1";         // Tópico para controlar o LED 1
const topicoLed2 = "joca/led2";         // Tópico para controlar o LED 2

//Gera um ID único para o cliente evita conflitos de ID
const clientID= "webClient_"+Math.floor(Math.random() * 10000);

// Cria um cliente MQTT
const client = new Paho.MQTT.Client(brokerUrl, clientID);

//Define uma função automaticamente quando a conexão é perdida
client.onConnectionLost = (responseObject) =>{
    console.error("Conexão perdida:", responseObject.errorMessage);
}

// 📥 Define função chamada automaticamente quando uma mensagem chega
client.onMessageArrived = (message) => {
    console.log("📥 Mensagem recebida:", message.destinationName, message.payloadString);
  
  
    // Verifica se a mensagem recebida é do tópico de leitura do sensor
    if (message.destinationName === topicoSensor) {
      try {
        // Converte a string JSON recebida em um objeto JavaScript
        const dados = JSON.parse(message.payloadString);
  
  
        // Atualiza elementos HTML com os valores de temperatura e umidade
        document.getElementById("temp").innerText = dados.temperatura;
        document.getElementById("umid").innerText = dados.umidade;
  
  
      } catch (e) {
        // Exibe erro se o JSON estiver malformado
        console.error("❌ Erro ao parsear JSON:", e);
      }
    }
  };
  // 🔗 Conecta o cliente ao broker MQTT com SSL ativado
client.connect({
    useSSL: true, // obrigatório para conexões WSS (WebSocket Secure)
  
  
    // ✅ Se conectar com sucesso, mostra mensagem e se inscreve no tópico do sensor
    onSuccess: () => {
      console.log("✅ Conectado ao broker MQTT");
      client.subscribe(topicoSensor); // começa a escutar dados do sensor
    },
  
  
    // ❌ Se falhar ao conectar, exibe mensagem de erro
    onFailure: (err) => {
      console.error("❌ Falha na conexão:", err);
    }
  });

  // 💡 Função para enviar comando a um dos LEDs via MQTT
function enviarComando(led, estado) {
    // Escolhe o tópico correto com base no LED selecionado
    const topico = led === "led1" ? topicoLed1 : topicoLed2;
  
  
    // Cria a mensagem MQTT com o estado desejado ("1" ou "0")
    const message = new Paho.MQTT.Message(estado);
  
  
    // Define para qual tópico essa mensagem será enviada
    message.destinationName = topico;
  
  
    // Envia a mensagem ao broker
    client.send(message);
  
  
    // Log no console indicando que a mensagem foi enviada
    console.log(`📤 Enviado para ${topico}: ${estado}`);
  }