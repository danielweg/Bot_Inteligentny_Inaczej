const botMessage = `<strong><u>TurboBot:</u></strong>`;
const userMessage = `<strong><u>You:</u></strong>`;
const botDontUnderstandText = `Nie rozumiem Cię ziom! Sorry!`;
let textArea = document.getElementById("textArea");
let chatArea = document.getElementById("chatArea");
let userCode;
let botCode;

function sendWelcomeMessage() {
    botCode = "BQ1";
    chatArea.innerHTML = `${prepareBotMessage(false, welcomeMessageText)}`;
}

addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendButton").click();
    }
});

function sendMessage() {
    let userNewMessage = textArea.value.trim();
    textArea.value = "";
    chatArea.innerHTML += `<br>${userMessage} ${userNewMessage}`;
    if (evaluateUserCode(userNewMessage) && evaluateAnswer()) {
        botCode = getUserObjectByCode(userCode).answers;
        setTimeout(botReplies, 1500);
    } else {
        sendBotDontUnderstand();
    }
}

function clearChat() {
    textArea.removeAttribute("disabled");
    botCode = "BQ2";
    botObject = getBotObjectByCode(botCode);
    chatArea.innerHTML += prepareBotMessage(true, botObject.text);
}

function botReplies() {
    botObject = getBotObjectByCode(botCode);
    chatArea.innerHTML += prepareBotMessage(true, botObject.text);
    setTimeout(checkIfSendSecondAnswerOrClose, 1500);
}

function checkIfSendSecondAnswerOrClose() {
    if (botCode !== "BQ21" && botCode !== "BQ24") {
        botCode = "BQ2";
        botObject = getBotObjectByCode(botCode);
        chatArea.innerHTML += prepareBotMessage(true, botObject.text);
    } else if (botCode === "BQ24") {
        textArea.setAttribute("disabled", true);
    }
}

function prepareBotMessage(br, text) {
    return br ? `<br>${botMessage} ${text}` : `${botMessage} ${text}`
}

function sendBotDontUnderstand() {
    botCode = "BQ2";
    chatArea.innerHTML += `${prepareBotMessage(true, botDontUnderstandText)} <br> ${prepareBotMessage(false, getBotObjectByCode().text)}`
}

function evaluateUserCode(textMessage) {
    let userObject = userQuotes.find(quote => textMessage.toLowerCase() === quote.text.toLowerCase());
    if (userObject !== undefined) {
        userCode = userObject.code;
        return true;
    } else {
        return false;
    }
}

function evaluateAnswer() {
    return getBotObjectByCode().answers.includes(userCode);
}

function getUserObjectByCode() {
    return userQuotes.find(userQuote => userQuote.code === userCode);
}

function getBotObjectByCode() {
    return botQuotes.find(botQuote => botQuote.code === botCode);
}

window.onload = sendWelcomeMessage();