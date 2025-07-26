<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
    <!-- Header -->
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
              <p class="text-sm text-gray-500">Résultats du quiz</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
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

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
      <div class="w-full bg-white rounded-2xl shadow-xl border border-gray-200">
        <!-- Header Section -->
        <div class="p-6 border-b border-gray-100">
          <div class="text-center">
            <div class="w-20 h-20 bg-quiz-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Quiz terminé !</h1>
            <p class="text-lg text-gray-600">Félicitations pour avoir terminé le quiz</p>
          </div>
        </div>

        <!-- Score Display -->
        <div class="p-6 border-b border-gray-100">
          <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <div class="text-center">
              <div class="text-4xl font-bold text-quiz-green mb-3">
                {{ scoreValue }}/{{ totalQuestionsValue }}
              </div>
              <div class="text-lg text-gray-600 mb-4">
                {{ getScoreMessage() }}
              </div>
              
              <!-- Progress Bar -->
              <div class="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  class="bg-quiz-green h-3 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: `${(scoreValue / totalQuestionsValue) * 100}%` }"
                ></div>
              </div>
              
              <div class="text-sm font-semibold text-gray-700">
                {{ Math.round((scoreValue / totalQuestionsValue) * 100) }}% de réussite
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="p-6 border-b border-gray-100">
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-green-50 rounded-xl border border-green-200">
              <div class="text-2xl font-bold text-quiz-green mb-1">{{ correctValue }}</div>
              <div class="text-sm text-gray-600 font-medium">Bonnes réponses</div>
            </div>
            <div class="text-center p-4 bg-red-50 rounded-xl border border-red-200">
              <div class="text-2xl font-bold text-quiz-red mb-1">{{ incorrectValue }}</div>
              <div class="text-sm text-gray-600 font-medium">Mauvaises réponses</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-6">
          <div class="space-y-3">
            <button
              @click="restartQuiz"
              class="w-full py-3 px-6 bg-quiz-green text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
              Rejouer le quiz
            </button>
            
            <button
              @click="viewResults"
              class="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              Voir les détails
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <div class="text-center">
            <p class="text-sm text-gray-500">
              Merci d'avoir participé au quiz Huiz !
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Action Button -->
    <div class="fixed bottom-6 right-6 z-50">
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
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  score: {
    type: Number,
    required: false
  },
  totalQuestions: {
    type: Number,
    required: false
  },
  correctAnswers: {
    type: Number,
    required: false
  },
  incorrectAnswers: {
    type: Number,
    required: false
  }
})

const scoreValue = computed(() => Number(route.query.score) || props.score || 0)
const correctValue = computed(() => Number(route.query.correctAnswers) || props.correctAnswers || 0)
const incorrectValue = computed(() => Number(route.query.incorrectAnswers) || props.incorrectAnswers || 0)
const totalQuestionsValue = computed(() => Number(route.query.totalQuestions) || props.totalQuestions || 10)

const emit = defineEmits(['restart', 'view-results'])

const getScoreMessage = () => {
  const percentage = (scoreValue.value / totalQuestionsValue.value) * 100
  
  if (percentage >= 90) return "Excellent !"
  if (percentage >= 80) return "Très bien !"
  if (percentage >= 70) return "Bien !"
  if (percentage >= 60) return "Pas mal !"
  if (percentage >= 50) return "Moyen !"
  return "À améliorer !"
}

const restartQuiz = () => {
  router.push({ name: 'Quiz' })
}

const viewResults = () => {
  router.push({ name: 'Home' })
}

const goHome = () => {
  router.push({ name: 'Home' })
}
</script> 