const alternativa = document.getElementById("pergunta")
const pergunta = Array.from(document.getElementsByClassName("pergunta"))

let questaoAtual = {}
let aceitaResposta = true
let pontos = 0
let contadorQuestoes = 0
let questoesDisponiveis = []

let perguntas = [
  {
    pergunta: "Quem unificou o Egito?",
    alternativa1: "Quéops",
    alternativa2: "Menés",
    alternativa3: "Tutankamon",
    alternativa4: "Ramsés",
    resposta: 2,
  },
  {
    pergunta: "Quando foi firmado o Tratado de Tordesilhas?",
    alternativa1: "1 de janeiro de 1593",
    alternativa2: "7 de junho de 1494",
    alternativa3: "22 de abril de 1500",
    alternativa4: "21 de abril de 1792",
    resposta: 2,
  },
  {
    pergunta: "O feudalismo é uma característica de qual período histórico?",
    alternativa1: "Pré-História",
    alternativa2: "Idade Antiga",
    alternativa3: "Idade Moderna",
    alternativa4: "Idade Média",
    resposta: 4,
  },
  {
    pergunta: "O período mais extenso da Pré-História é:",
    alternativa1: "Paleolítico",
    alternativa2: "Neolítico",
    alternativa3: "Pedra polida",
    alternativa4: "Revolução Agrícola",
    resposta: 1,
  },
]

const BONUS_POR_ACERTO = 10
const MAXIMO_DE_PERGUNTAS = 3

// Inicia o jogo
startGame = () => {
  contadorQuestoes = 0
  pontos = 0
  questoesDisponiveis = [...perguntas]
  console.log(questoesDisponiveis)
  getNewQuestion()
}

// Controla novas questões
getNewQuestion = () => {
  if (
    questoesDisponiveis.length === 0 ||
    contadorQuestoes >= MAXIMO_DE_PERGUNTAS
  ) {
    return window.location.assign("/end.html")
  }

  contadorQuestoes++
  const i = Math.floor(Math.random() * questoesDisponiveis.length)
  questaoAtual = questoesDisponiveis[i]
  alternativa.innerText = questaoAtual.pergunta

  pergunta.forEach((alternativa) => {
    const number = alternativa.dataset["number"]
    alternativa.innerText = questaoAtual["alternativa" + number]
  })

  questoesDisponiveis.splice(i, 1)

  aceitaResposta = true
}

// Possibilita o clique na alternativa
pergunta.forEach((alternativa) => {
  alternativa.addEventListener("click", (e) => {
    if (!aceitaResposta) return

    aceitaResposta = false
    const selecionada = e.target
    const respostaSelec = selecionada.dataset["number"]
    getNewQuestion()
  })
})

startGame()
