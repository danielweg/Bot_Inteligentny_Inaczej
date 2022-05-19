const welcomeMessageText = ` Cześć, jak tam zajęcia z JS?`;

let defaultAnswer = {
    code: "B0",
    text: "Nie rozumiem Cię ziom! Sorry!",
    answers: null
}

const botQuotes = [
    botAnswer1 = {
        code: "BQ1",
        text: "Cześć, jak tam zajęcia z JS?",
        answers: ["UA11", "UA12", "UA13", "UA14", "UA15"]
    },
    botAnswer11 = {
        code: "BA11",
        text: "Wspaniale! Cieszę się!",
        answers: null
    },
    botAnswer12 = {
        code: "BA12",
        text: "Nie martw się, początki zawsze są trudne!",
        answers: null
    },
    botAnswer2 = {
        code: "BQ2",
        text: "Co chciałbyś wiedzieć?",
        answers: ["UA21", "UA25", "UA26", "UA27"]
    },
    botAnswer21 = {
        code: "BQ21",
        text: "Jakie miasto?",
        answers: ["UA22", "UA23", "UA24"]
    },
    botAnswer211 = {
        code: "BQ211",
        text: "Słońce świeci, 26 stopni",
        answers: null
    },
    botAnswer212 = {
        code: "BQ212",
        text: "Pada deszcz, 14 stopni",
        answers: null
    },
    botAnswer213 = {
        code: "BQ213",
        text: "Upał, 35 stopni",
        answers: null
    },
    botAnswer22 = {
        code: "BQ22",
        text: "5% - lepiej nie bierz kredytu!",
        answers: null
    },
    botAnswer23 = {
        code: "BQ23",
        text: "Przecież wiesz jak masz na imię. Po co mnie o to pytasz?",
        answers: null
    },
    botAnswer24 = {
        code: "BQ24",
        text: "W takim razie spadam na kawę! Narka!",
        answers: null
    }
]

const userQuotes = [
    userAnswer11 = {
        code: "UA11",
        text: "Super",
        answers: "BA11"
    },
    userAnswer12 = {
        code: "UA12",
        text: "Świetnie",
        answers: "BA11"
    },
    userAnswer13 = {
        code: "UA13",
        text: "OK",
        answers: "BA11"
    },
    userAnswer14 = {
        code: "UA14",
        text: "Trudne",
        answers: "BA12"
    },
    userAnswer15 = {
        code: "UA15",
        text: "Ciężkie",
        answers: "BA12"
    },
    userAnswer21 = {
        code: "UA21",
        text: "Jaka dziś pogoda?",
        answers: "BQ21"
    },
    userAnswer22 = {
        code: "UA22",
        text: "Kraków",
        answers: "BQ211"
    },
    userAnswer23 = {
        code: "UA23",
        text: "Warszawa",
        answers: "BQ212"
    },
    userAnswer24 = {
        code: "UA24",
        text: "Madryt",
        answers: "BQ213"
    },
    userAnswer25 = {
        code: "UA25",
        text: "Ile wynoszą obecnie stopy procentowe w Polsce?",
        answers: "BQ22"
    },
    userAnswer26 = {
        code: "UA26",
        text: "Jak mam na imię?",
        answers: "BQ23"
    },
    userAnswer15 = {
        code: "UA27",
        text: "Nie mam pytań",
        answers: "BQ24"
    }
]
