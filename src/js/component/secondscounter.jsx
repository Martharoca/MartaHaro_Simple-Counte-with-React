import React from "react";
import propTypes from "prop-types";

function SimpleCounter(props) {
    return (<div className="bigCounter">
        <div className="watch">
        <i className="far fa-clock"></i>
        </div>
        <div className="four">{props.digito4 % 10}</div>
        <div className="three">{props.digito3 % 10}</div>
        <div className="two">{props.digito2 % 10}</div>
        <div className="one">{props.digito1 % 10}</div>
    </div>);
}
SimpleCounter.propTypes = {
    digito4: propTypes.array,
    digito3: propTypes.bool,
    digito2: propTypes.bool,
    digito1: propTypes.bool,
}

export default SimpleCounter