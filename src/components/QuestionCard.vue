<template>
  <div class="flex-1 bg-white">

    <!-- Question Title -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 leading-tight">
        {{ currentQuestion.question }}
      </h1>
    </div>

    <!-- Answer Options -->
    <div class="space-y-4 mb-8">
      <div
        v-for="(option, key) in currentQuestion.options"
        :key="key"
        @click="selectAnswer(key)"
        :class="[
          'p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between hover:shadow-md',
          selectedAnswer === key
            ? 'border-quiz-green bg-green-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300',
          showResult && selectedAnswer === key
            ? isCorrect
              ? 'border-quiz-green bg-green-50 shadow-lg'
              : 'border-quiz-red bg-red-50 shadow-lg'
            : '',
          showResult && key === currentQuestion.answer && selectedAnswer !== key
            ? 'border-quiz-green bg-green-50 shadow-lg'
            : ''
        ]"
      >
        <div class="flex items-center space-x-4">
          <span 
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200',
              selectedAnswer === key
                ? 'bg-quiz-green text-white'
                : 'bg-gray-100 text-gray-700'
            ]"
          >
            {{ String.fromCharCode(64 + parseInt(key)) }}
          </span>
          <span class="text-gray-700 text-lg">{{ option }}</span>
        </div>
        
        <!-- Checkmark or X icon -->
        <div v-if="showResult" class="flex-shrink-0">
          <svg
            v-if="(selectedAnswer === key && isCorrect) || (key === currentQuestion.answer)"
            class="w-6 h-6 text-quiz-green"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <svg
            v-else-if="selectedAnswer === key && !isCorrect"
            class="w-6 h-6 text-quiz-red"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="flex justify-center">
      <button
        @click="submitAnswer"
        :disabled="!selectedAnswer || showResult"
        :class="[
          'px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
          selectedAnswer && !showResult
            ? 'bg-quiz-green hover:bg-green-600'
            : 'bg-gray-300 cursor-not-allowed'
        ]"
      >
        <span v-if="showResult && !selectedAnswer" class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" />
          </svg>
          Temps écoulé
        </span>
        <span v-else-if="showResult" class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Réponse soumise
        </span>
        <span v-else class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
          </svg>
          Soumettre la réponse
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  currentQuestion: {
    type: Object,
    required: true
  },
  showResult: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['answer-submitted'])

const selectedAnswer = ref(null)

const isCorrect = computed(() => {
  return selectedAnswer.value === props.currentQuestion.answer
})

const selectAnswer = (answerKey) => {
  if (!props.showResult) {
    selectedAnswer.value = answerKey
  }
}

const submitAnswer = () => {
  if (selectedAnswer.value) {
    emit('answer-submitted', {
      questionId: props.currentQuestion.id,
      selectedAnswer: selectedAnswer.value,
      isCorrect: isCorrect.value
    })
  }
}

const resetSelection = () => {
  selectedAnswer.value = null
}

defineExpose({ resetSelection })
</script> 