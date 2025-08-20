import {Client} from 'paho-mqtt';

let client; //Var global para guardar a instância do cliente mqtt

export function connectMQTT(onMessageReceived) {

//Usar wss na porta 8884
client = new Client('broker.hivemq.com', 8884, 'reactClient' + Math.random());

client.onConnectionLost = function (responseObject) {
    console.log("Conexão perdida", responseObject);

}

//define o handler para a chegada de novas mensagens
client.onMessageArrived = (message) =>{
    onMessageReceived(message.destinationName, message.payloadString);
}

//Inicia a conexão e subscreve nos tópicos
client.connect({
useSSL: true,
onSuccess: () => {
    console.log("MQTT conectado via WSS");
    //Subscribing to a topic
    client.subscribe("joaquim/resp_enviada");
    client.subscribe("joaquim/resultado");
    client.subscribe("joaquim/statusAluno");
},
onFailure: (err) => {
    console.error("Erro Mqtt", err);
}

})
}

export const publishMessage = (topic, payLoad) =>{
    if(!client) return;
    const message = new window.Paho.MQTT.Message(payLoad);
    message.destinationName = topic;
    client.send(message);
}