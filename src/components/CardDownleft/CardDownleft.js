import React from "react";
import './CardDownleft.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

class CardDownleft extends React.Component {
    render() {
        return (
            <div className="carddownleft">
                <h1>Twitter Feed <small>#{this.props.city}</small></h1>
                <p>Don't forget your sunscreen tomorrow!<br />
                    <br />
                    Amazing weather Today!</p>
                <h3>NEXT</h3>
                {/*    */}
                <div className="arrows">
                    <button ><FontAwesomeIcon icon={faCaretRight} /></button>
                </div>
            </div>
        )
    }
}

export default CardDownleft;