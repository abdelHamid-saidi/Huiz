<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
    <div class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-quiz-green rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-800">Huiz</h1>
              <p class="text-sm text-gray-500">Quiz en cours</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-sm text-gray-600">
              Question <span class="font-semibold text-quiz-green">{{ currentQuestionIndex + 1 }}</span> sur {{ questions.length }}
            </div>
            <button
              @click="goHome"
              class="px-4 py-2 text-gray-600 hover:text-quiz-green transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!questions.length" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 bg-quiz-green rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Chargement du quiz...</h2>
        <p class="text-gray-600">Préparation de vos questions</p>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto pb-24 px-6 lg:pb-24 lg:px-8 py-8 lg:py-12">
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-12">
        <div class="xl:col-span-3">
          <div class="w-full bg-white rounded-2xl shadow-xl border border-gray-200">
            <div class="p-6 border-b border-gray-100">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">Quiz</span>
                <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-gray-500">Question {{ currentQuestionIndex + 1 }}</span>
              </div>
            </div>

            <div class="p-6">
              <QuestionCard 
                :current-question="questions[currentQuestionIndex]" 
                :show-result="showResult"
                @answer-submitted="handleAnswerSubmitted"
              />
            </div>
          </div>
        </div>

        <div class="xl:col-span-1">
            <Sidebar 
              :time-remaining="timeRemaining"
              :current-question-index="currentQuestionIndex"
              :total-questions="questions.length"
              :questions="questions"
              :answered-questions="answeredQuestions"
            />
        </div>
      </div>
    </div>

    <div v-if="questions.length" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="text-sm text-gray-600">
              Progression: <span class="font-semibold text-quiz-green">{{ Math.round(((currentQuestionIndex + 1) / questions.length) * 100) }}%</span>
            </div>
            <div class="text-sm text-gray-600">
              Score: <span class="font-semibold text-quiz-green">{{ score }}</span> / {{ questions.length }}
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full bg-quiz-green rounded-full transition-all duration-300"
                :style="{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }"
              ></div>
            </div>
            <span class="text-sm text-gray-500">{{ currentQuestionIndex + 1 }}/{{ questions.length }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="questions.length" class="fixed bottom-6 right-6 z-50">
      <button
        @click="goHome"
        class="w-14 h-14 bg-quiz-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
        title="Retour à l'accueil"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </button>
    </div>

    <div v-if="showTimeWarning" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-8 max-w-md mx-4 text-center">
        <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Temps presque écoulé !</h3>
        <p class="text-gray-600 mb-6">Il ne vous reste que 5 secondes pour répondre à cette question.</p>
        <button
          @click="showTimeWarning = false"
          class="px-6 py-3 bg-quiz-green text-white rounded-xl hover:bg-green-600 transition-colors"
        >
          Compris
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import QuestionCard from '../components/QuestionCard.vue'
import Sidebar from '../components/Sidebar.vue'
import { getRandomQuestions, resetQuestionIds } from '../utils/quizUtils.js'

const router = useRouter()

const questions = ref([])
const currentQuestionIndex = ref(0)
const timeRemaining = ref(30)
const score = ref(0)
const answeredQuestions = ref([])
const userAnswers = ref({})
const correctAnswers = ref(0)
const incorrectAnswers = ref(0)
const showResult = ref(false)
const showTimeWarning = ref(false)

const initializeQuiz = () => {
  const randomQuestions = getRandomQuestions()
  questions.value = resetQuestionIds(randomQuestions)
}

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

let timerInterval = null

const startTimer = () => {
  timeRemaining.value = 30
  timerInterval = setInterval(() => {
    timeRemaining.value--
    
    if (timeRemaining.value === 5) {
      showTimeWarning.value = true
      setTimeout(() => {
        showTimeWarning.value = false
      }, 3000)
    }
    
    if (timeRemaining.value <= 0) {
      handleTimeUp()
    }
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const handleTimeUp = () => {
  stopTimer()
  handleAnswerSubmitted({
    questionId: questions.value[currentQuestionIndex.value].id,
    selectedAnswer: null,
    isCorrect: false,
    timeUp: true
  })
}

const handleAnswerSubmitted = (answerData) => {
  stopTimer()
  showResult.value = true
  
  if (answerData.selectedAnswer) {
    userAnswers.value[answerData.questionId] = answerData.selectedAnswer
  }
  
  if (answerData.isCorrect) {
    score.value++
    correctAnswers.value++
  } else {
    incorrectAnswers.value++
  }
  
  answeredQuestions.value.push(currentQuestionIndex.value)
  
  setTimeout(() => {
    nextQuestion()
  }, 2000)
}

const nextQuestion = () => {
  showResult.value = false
  
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    startTimer()
  } else {
    finishQuiz()
  }
}

const finishQuiz = () => {
  router.push({
    name: 'Result',
    query: {
      score: score.value,
      totalQuestions: questions.value.length,
      correctAnswers: correctAnswers.value,
      incorrectAnswers: incorrectAnswers.value
    }
  })
}

const goHome = () => {
  if (confirm('Êtes-vous sûr de vouloir quitter le quiz ? Votre progression sera perdue.')) {
    router.push({ name: 'Home' })
  }
}

onMounted(() => {
  initializeQuiz()
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 