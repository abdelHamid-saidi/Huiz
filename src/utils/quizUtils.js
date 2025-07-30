import allQuestions from '../data/questions.js'

export function getRandomQuestions() {
  // La première question sera toujours la question sur la capitale de l'Italie
  const firstQuestion = allQuestions.find(q => q.id === 1)
  
  // Exclure la première question du mélange pour éviter les doublons
  const remainingQuestions = allQuestions.filter(q => q.id !== 1)
  
  // Mélanger les questions restantes
  const shuffled = [...remainingQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  // Prendre 9 questions aléatoires et ajouter la première question au début
  const randomQuestions = shuffled.slice(0, 9)
  return [firstQuestion, ...randomQuestions]
}

export function resetQuestionIds(questions) {
  return questions.map((question, index) => ({
    ...question,
    id: index + 1
  }))
} 