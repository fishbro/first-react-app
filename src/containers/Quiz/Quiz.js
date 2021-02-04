import React, {Component} from "react";
import classes from './Quiz.module.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
    state = {
        quiz: [
            {
                question: "How are you?",
                rightAnswerId: 2,
                answers: [
                    {
                        id: 1,
                        text: 'Very nice'
                    },
                    {
                        id: 2,
                        text: 'Nice'
                    },
                    {
                        id: 3,
                        text: 'Sad'
                    },
                    {
                        id: 4,
                        text: 'Bad'
                    }
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>

                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;