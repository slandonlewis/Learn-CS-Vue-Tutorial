<template>
    <div>
        <div class="question-container">
            <h1 class="question">This is a question</h1>
        </div>
        <div class="options-container">
            <div class="option">
                <p class="option-label">A</p>
                <div class="option-value">
                    <p>Option 1</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 20px;
    }

    .question {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        background-color: bisque;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: brown;
    }

    .option-value {
        background-color: rgb(244,239,239);
        width: 100%;
        font-size: 30px;
        color: grey;
        padding: 0 20px;
    }
</style>