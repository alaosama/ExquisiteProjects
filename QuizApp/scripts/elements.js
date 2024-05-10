"use strict";

class QuizElementsHelper {

  constructor(app, quizCard, questionCard, resultCard, quiz) {
    this.app = app;
    this.quiz = quiz;
    this.quizCard = quizCard;
    this.questionCard = questionCard;
    this.resultCard = resultCard;

    // Find & assign elements
    this.assignElements();

    // Initialize the listeners
    this.initListeners();

    // Show quiz details card
    this.showQuizCard();
  }

  assignElements() {
    // Quiz Card Elements
    this.quizCard.startBtn = this.quizCard.querySelector(
      ".quiz-details__start-btn"
    );
    this.quizCard.titleElm = this.quizCard.querySelector(
      ".quiz-details__title"
    );
    this.quizCard.descriptionElm = this.quizCard.querySelector(
      ".quiz-details__description"
    );
    this.quizCard.metaQCElm = this.quizCard.querySelector(
      ".quiz-details__meta.--qc strong"
    );
    this.quizCard.metaTimeElm = this.quizCard.querySelector(
      ".quiz-details__meta.--t strong"
    );

    // Question Card Elements
    this.questionCard.progressRemainingTimeElm = document.querySelector(
      ".questions-card__remaining-time"
    );
    this.questionCard.progressQuestionCountElm = document.querySelector(
      ".questions-card__q-count"
    );
    this.questionCard.progressbarElm = document.querySelector(
      ".questions-card__progress .--value"
    );
    this.questionCard.questionTitleElm = document.getElementById(
      "question-title"
    );
    this.questionCard.optionOneElm = document.querySelector(
      "#option-one ~ label"
    );
    this.questionCard.optionTwoElm = document.querySelector(
      "#option-two ~ label"
    );
    this.questionCard.optionThreeElm = document.querySelector(
      "#option-three ~ label"
    );
    this.questionCard.optionFourElm = document.querySelector(
      "#option-four ~ label"
    );
    this.questionCard.nextBtn = this.app.querySelector("#next-btn");
    this.questionCard.stopBtn = this.app.querySelector("#stop-btn");

    // Result Card Elements
    this.resultCard.gotoHome = this.resultCard.querySelector("#go-to-home");
    this.resultCard.scoreElm = this.resultCard.querySelector("#score");
  }

  
}