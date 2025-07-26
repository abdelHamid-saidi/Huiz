import allQuestions from '../data/questions.js'

export function getRandomQuestions() {
  const shuffled = [...allQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, 10)
}

export function resetQuestionIds(questions) {
  return questions.map((question, index) => ({
    ...question,
    id: index + 1
  }))
} 