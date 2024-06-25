$(document).ready(function () {
    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Lisbon", correct: false }
            ]
        },
        {
            question: "Which language is used for web apps?",
            answers: [
                { text: "Python", correct: false },
                { text: "JavaScript", correct: true },
                { text: "Java", correct: false },
                { text: "C++", correct: false }
            ]
        },
        {
            question: "Who is the current President of the USA?",
            answers: [
                { text: "Donald Trump", correct: false },
                { text: "Barack Obama", correct: false },
                { text: "Joe Biden", correct: true },
                { text: "George Bush", correct: false }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        $('#result-container').addClass('hidden');
        $('#quiz-container').removeClass('hidden');
        currentQuestionIndex = 0;
        score = 0;
        showQuestion(questions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        $('#question-container').text(question.question);
        $('#answer-buttons').empty();
        question.answers.forEach(answer => {
            const button = $('<button></button>').text(answer.text).addClass('btn').click(() => selectAnswer(answer));
            $('#answer-buttons').append(button);
        });
    }

    function selectAnswer(answer) {
        if (answer.correct) {
            score++;
        }
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        $('#quiz-container').addClass('hidden');
        $('#result-container').removeClass('hidden');
        $('#result-text').text(`You scored ${score} out of ${questions.length}!`);
    }

    $('#next-btn').click(function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    });

    $('#restart-btn').click(startQuiz);

    startQuiz();
});
