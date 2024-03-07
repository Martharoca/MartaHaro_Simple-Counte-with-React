import React from "react";
import propTypes from "prop-types";

function SimpleCounter(props) {
    return (<div className="bigCounter">
        <div className="watch">
        <i className="far fa-clock"></i>
        </div>
		<div className="four">{props.digito6 % 10}</div>
        <div className="four">{props.digito5 % 10}</div>
		<div className="four">{props.digito4 % 10}</div>
        <div className="three">{props.digito3 % 10}</div>
        <div className="two">{props.digito2 % 10}</div>
        <div className="one">{props.digito1 % 10}</div>
    </div>);
}
SimpleCounter.propTypes = {
    digito6: propTypes.number,
    digito5: propTypes.number,
    digito4: propTypes.number,
    digito3: propTypes.number,
	digito2: propTypes.number,
	digito1: propTypes.number,
}

export default SimpleCounter