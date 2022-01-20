const Alexa = require('ask-sdk-core');

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        //Question One -> "donde está"
        //Question Two -> "A qué distancia está"

        const question1 = Alexa.getSlotValue(handlerInput.requestEnvelope, "questionOne");
        const question2 = Alexa.getSlotValue(handlerInput.requestEnvelope, "questionTwo");        
        const locator = Alexa.getSlotValue(handlerInput.requestEnvelope, "locator");
        
        let speechText = "Hola mundo"
        if(question1){
            //Call the api to know where the locator is
            speechText = `buscando donde está el localizador ${locator}`;
        }else if(question2){
            //Call the api to know how far away the locator is
            speechText = `buscando la distancia a la que se encuentra el localizador ${locator}`;
        }
        
        return handlerInput.responseBuilder
            .speak(speechText)            
            .reprompt(speechText)
            .getResponse();
    }
}


module.exports = { HelloWorldIntentHandler };