<script setup>
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import { useRoute } from 'vue-router'
    import { ref, watch, computed } from "vue"
    import quizes from "../data/quizes.json"
    import Result from "../components/Result.vue"

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0)
    const quiz = quizes.find(q => q.id === quizId)
    const showResults = ref(false)
    const onOptionSelected = (isCorrect) => {
        if(isCorrect) {
            numberOfCorrectAnswers.value++
        }
        if (quiz.questions.length -1 === currentQuestionIndex.value) {
            showResults.value = true
        }
        currentQuestionIndex.value++
    }
    // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

    // watch(() => currentQuestionIndex.value, () => {
    //     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
    // })
    const questionStatus = computed(() => {
        return `${currentQuestionIndex.value}/${quiz.questions.length}`
    })
    const barPercentage = computed(() => {
        return `${currentQuestionIndex.value/quiz.questions.length * 100}%`
    })
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage "/>
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]" 
            @selectOption="onOptionSelected"/>
            <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers"/>
        </div>
    </div>
</template>