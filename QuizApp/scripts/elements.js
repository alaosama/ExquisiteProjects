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
}