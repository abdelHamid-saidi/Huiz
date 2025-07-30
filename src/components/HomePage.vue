<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-quiz-green rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-800">Huiz</h1>
              <p class="text-sm text-gray-500">Quiz interactif moderne</p>
            </div>
          </div>
            <div class="hidden md:flex items-center space-x-6">
             <a href="#features" @click="scrollToSection('features')" class="text-gray-600 hover:text-quiz-green transition-colors">Fonctionnalités</a>
             <a href="#about" @click="scrollToSection('about')" class="text-gray-600 hover:text-quiz-green transition-colors">À propos</a>
             <button
               @click="startQuiz"
               class="px-6 py-2 bg-quiz-green text-white rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
             >
               Commencer
             </button>
           </div>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column - Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-green-100 text-quiz-green rounded-full text-sm font-medium">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Nouveau quiz disponible
            </div>
            <h2 class="text-6xl font-bold text-gray-800 leading-tight">
              Testez vos connaissances avec
              <span class="text-quiz-green bg-gradient-to-r from-quiz-green to-green-600 bg-clip-text text-transparent">Huiz</span>
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Une expérience de quiz moderne et interactive avec des questions variées, 
              un timer dynamique et des résultats détaillés. Parfait pour apprendre en s'amusant !
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 py-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-quiz-green">10</div>
              <div class="text-sm text-gray-600">Questions</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-quiz-green">30s</div>
              <div class="text-sm text-gray-600">Par question</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-quiz-green">100%</div>
              <div class="text-sm text-gray-600">Gratuit</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              @click="startQuiz"
              class="inline-flex items-center px-8 py-4 bg-quiz-green text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Commencer le quiz
            </button>
            <button class="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-quiz-green hover:text-quiz-green transition-all duration-200">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              Voir la démo
            </button>
          </div>
        </div>

        <!-- Right Column - Preview -->
        <div class="relative">
          <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <!-- Quiz Preview -->
            <div class="space-y-6">
              <!-- Question Preview -->
              <div>
                <div class="text-sm text-gray-500 mb-3">Question 1 sur 10</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-6">
                  Islam Slimani a déclaré que 'le plus duur c'était ...'
                </h3>
                
                <!-- Options Preview -->
                <div class="space-y-4">
                  <div class="p-4 border-2 border-gray-200 rounded-xl flex items-center space-x-4 hover:border-gray-300 transition-colors">
                    <span class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">A</span>
                    <span class="text-gray-700">Échapper à Baya quand elle t’a à l'œil</span>
                  </div>
                  <div class="p-4 border-2 border-quiz-green bg-green-50 rounded-xl flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                      <span class="w-8 h-8 rounded-full bg-quiz-green flex items-center justify-center text-sm font-semibold text-white">B</span>
                      <span class="text-gray-700">Van Dijk 🤣</span>
                    </div>
                    <svg class="w-6 h-6 text-quiz-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="p-4 border-2 border-gray-200 rounded-xl flex items-center space-x-4 hover:border-gray-300 transition-colors">
                    <span class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">C</span>
                    <span class="text-gray-700">Éviter les plats de couscous avant un match</span>
                  </div>
                  <div class="p-4 border-2 border-gray-200 rounded-xl flex items-center space-x-4 hover:border-gray-300 transition-colors">
                    <span class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">D</span>
                    <span class="text-gray-700">Faire taire mon oncle pendant un match de l'Algérie</span>
                  </div>
                </div>
              </div>

              <!-- Timer Preview -->
              <div class="flex justify-center pt-4">
                <div class="relative">
                  <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" stroke-width="6" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" stroke-width="6" stroke-linecap="round" stroke-dasharray="282.7" stroke-dashoffset="141.4" />
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-xl font-bold text-quiz-green">0:15</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h3 class="text-4xl font-bold text-gray-800 mb-4">Fonctionnalités principales</h3>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce qui rend Huiz unique et amusant à utiliser
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-quiz-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">10 Questions variées</h4>
            <p class="text-gray-600">Culture générale, sciences, histoire, géographie et plus encore</p>
          </div>

          <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-quiz-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">Timer dynamique</h4>
            <p class="text-gray-600">30 secondes par question avec animation circulaire</p>
          </div>

          <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-quiz-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">Résultats détaillés</h4>
            <p class="text-gray-600">Score et statistiques complètes avec graphiques</p>
          </div>

          <div class="text-center p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-quiz-green rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">Interface moderne</h4>
            <p class="text-gray-600">Design responsive et intuitif pour tous les écrans</p>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div id="about" class="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="text-4xl font-bold text-gray-800 mb-6">À propos de Huiz</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Huiz est une application de quiz moderne conçue pour offrir une expérience d'apprentissage 
              interactive et engageante. Notre objectif est de rendre l'apprentissage amusant et accessible à tous.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-quiz-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">100% gratuit et sans publicité</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-quiz-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">Questions mises à jour régulièrement</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-quiz-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">Compatible avec tous les navigateurs</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="text-center">
              <div class="text-6xl font-bold text-quiz-green mb-4">500+</div>
              <div class="text-xl text-gray-600 mb-6">Utilisateurs satisfaits</div>
              <div class="flex justify-center space-x-2">
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-gray-600">Note moyenne de 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-quiz-green py-20">
      <div class="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h3 class="text-4xl font-bold text-white mb-6">Prêt à tester vos connaissances ?</h3>
        <p class="text-xl text-green-100 mb-8">
          Rejoignez des milliers d'utilisateurs qui apprennent en s'amusant avec Huiz
        </p>
        <button
          @click="startQuiz"
          class="inline-flex items-center px-10 py-4 bg-white text-quiz-green font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          Commencer maintenant
        </button>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-quiz-green rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-xl font-bold">Huiz</h4>
            </div>
            <p class="text-gray-400">
              Quiz interactif moderne pour apprendre en s'amusant.
            </p>
          </div>
          <div>
            <h5 class="font-semibold mb-4">Produit</h5>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Résultats</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-4">Support</h5>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Aide</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-4">Légal</h5>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Conditions</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Huiz - Quiz interactif moderne. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const startQuiz = () => {
  router.push({ name: 'Quiz' })
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80 // Hauteur approximative du header
    const elementPosition = element.offsetTop - headerHeight - 20 // 20px de marge supplémentaire
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script> 