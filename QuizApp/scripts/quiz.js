let TIME_OVER_SYM = Symbol("TO");
let TIMER_INTERVAL_SYM = Symbol("TI");

class Quiz {

    constructor(title, description, time, questions = []) {

        if (!title)
            throw new Error("Title of quiz is required.");

        if (!description)
            throw new Error("Description of quiz is required.");

        if (!time || time < 10)
            throw new Error("Time is required and must be more than 10 sec.");

        this.title = title;
        this.description = description;
        this._time = time;
        this[TIME_OVER_SYM] = null;
        this[TIMER_INTERVAL_SYM] = null;
        this._questions = questions;
    }

    addQuestion(title, options) {
        if (this._startTime) {
            console.log("Question can not added on a started quiz.");
            return;
        }

        let id = this._questions.length;
        this._questions.push({ id, title, options })
    }

    // Start the quiz
    start() {
        if (!this._questions.length) {
            console.log("There is not any question");
            return;
        }

        if (this._startTime) {
            console.log("Already started.");
            return;
        }

        this.reset();
        this._startTime = new Date().getTime();

        this._setTicker();

        return this.currentQuestion;
    }

    // Stop the running quiz
    stop() {
        this._endTime = new Date().getTime();
        clearInterval(this[TIMER_INTERVAL_SYM]);
        this[TIMER_INTERVAL_SYM] = null;
    }

    // This will return the head question of running quiz
    get currentQuestion() {
        if (!this._startTime) {
            console.log("Quiz not started");
            return;
        }

        return this._questions[this._currentQuestionIndex];
    }


    // Get the result of running quiz
    result() {
        if (!this._startTime) {
            console.log("Quiz not started.");
            return;
        }

        let skipped = 0;
        let correct = 0;
        this._questions.map(q => {
            if (q.result)
                correct++;
            else if (q.skip)
                skipped++;
        });

        let score = (100 * correct) / this._questions.length;

        return {
            questionsCount: this._questions.length,
            skipped,
            correct,
            score,
            timeOver: this[TIME_OVER_SYM],
            finished: this.isOnLastQuestion() || this[TIME_OVER_SYM] || this._endTime
        };
    }

    // Reset the running quiz status and make it ready to start again
    reset() {
        if (this._startTime && !this._endTime) {
            console.log("Can not reset the running quiz.");
            return;
        }

        this._startTime = null;
        this._endTime = null;
        this._remainingTime = this._time;
        this._currentQuestionIndex = 0;
        this[TIME_OVER_SYM] = false;
        clearInterval(this[TIMER_INTERVAL_SYM]);

        this._questions = this._questions.map(q => ({ id: q.id, title: q.title, options: q.options }))
    }
    
}