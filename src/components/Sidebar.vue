<template>

  <div class="w-full bg-white rounded-2xl shadow-xl border border-gray-200">
    <!-- Timer Section -->
    <div class="p-6">
      <div class="flex justify-center m-4">
        <div class="relative">
          <!-- Timer Circle -->
          <svg class="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
            <!-- Background circle -->
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#F3F4F6"
              stroke-width="6"
            />
            <!-- Progress circle -->
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#10B981"
              stroke-width="6"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="strokeDashoffset"
              class="transition-all duration-1000 ease-linear"
            />
          </svg>
          
          <!-- Timer Text -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="text-3xl font-bold text-quiz-green">{{ formatTime(timeRemaining) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="px-6 pb-6">
      <div class="text-center">
        <div class="text-sm font-medium text-gray-600 mb-3">
          {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
        </div>
        <div class="w-full bg-gray-100 rounded-full h-2 mb-2">
          <div
            class="bg-quiz-green h-2 rounded-full transition-all duration-500 ease-out"
            :style="{ width: `${(currentQuestionIndex + 1) / totalQuestions * 100}%` }"
          ></div>
        </div>
        <div class="text-xs text-gray-400">
          {{ Math.round((currentQuestionIndex + 1) / totalQuestions * 100) }}% complété
        </div>
      </div>
    </div>

    <!-- Questions List -->
    <div class="border-t border-gray-100">
      <div class="px-4 py-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-800 text-sm">Questions</h3>
        </div>
        
        <div class="space-y-2 max-h-64 overflow-y-auto">
          <div
            v-for="(question, index) in questions"
            :key="question.id"
            :class="[
              'flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer border',
              index === currentQuestionIndex
                ? 'bg-quiz-green bg-opacity-10 border-quiz-green'
                : answeredQuestions.includes(index)
                ? isAnswerCorrect(index)
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            ]"
          >
            <div class="flex items-center space-x-3 flex-1">
              <span
                :class="[
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200',
                  index === currentQuestionIndex
                    ? 'bg-quiz-green text-white'
                    : answeredQuestions.includes(index)
                    ? isAnswerCorrect(index)
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                ]"
              >
                {{ index + 1 }}
              </span>
              <div class="flex-1 min-w-0">
                <div class="text-xs font-medium text-gray-700 truncate">
                  Question {{ index + 1 }}
                </div>
                <div class="text-xs text-gray-400">
                  {{ answeredQuestions.includes(index) ? 'Répondu' : index === currentQuestionIndex ? 'En cours' : 'En attente' }}
                </div>
              </div>
            </div>
            
            <!-- Status indicator -->
            <div v-if="answeredQuestions.includes(index)" class="flex-shrink-0">
              <svg 
                v-if="isAnswerCorrect(index)"
                class="w-4 h-4 text-green-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <svg 
                v-else
                class="w-4 h-4 text-red-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <div v-else-if="index === currentQuestionIndex" class="flex-shrink-0">
              <div class="w-2 h-2 bg-quiz-green rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  timeRemaining: {
    type: Number,
    required: true
  },
  currentQuestionIndex: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  questions: {
    type: Array,
    required: true
  },
  answeredQuestions: {
    type: Array,
    required: true
  },
  userAnswers: {
    type: Object,
    required: true
  }
})

const circumference = 2 * Math.PI * 42
const totalTime = 30

const strokeDasharray = computed(() => {
  return circumference
})

const strokeDashoffset = computed(() => {
  const progress = props.timeRemaining / totalTime
  return circumference * (1 - progress)
})

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const isAnswerCorrect = (questionIndex) => {
  const question = props.questions[questionIndex]
  const userAnswer = props.userAnswers[question.id]
  return userAnswer === question.answer
}
</script>

<style scoped>
.questions-list::-webkit-scrollbar {
  width: 4px;
}

.questions-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.questions-list::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.questions-list::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style> 