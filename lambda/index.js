exports.handler = async function(event) {
    const requestType = event.request.type;
    const intentName = requestType === 'IntentRequest' ? event.request.intent.name : null;

    let speech = '';

    if (requestType === 'LaunchRequest') {
        speech = 'Welcome! Ask me what the meaning of life is.';
    } else if (intentName === 'MeaningOfLifeIntent') {
        speech = 'The meaning of life is Dutch Bros Coffee.';
    } else {
        speech = 'Try asking: what is the meaning of life?';
    }

    return {
        version: '1.0',
        response: {
            outputSpeech: { type: 'PlainText', text: speech },
            shouldEndSession: true
        }
    };
};
