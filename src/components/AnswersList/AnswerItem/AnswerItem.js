import React from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = props => {
    return (
        <li
            className={classes.AnswerItem}
            onClick={props.onAnswerClick}
        >
            { props.answer.text }
        </li>
    );
}

export default AnswerItem;