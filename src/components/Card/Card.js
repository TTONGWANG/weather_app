import React from "react";
import CardUp from '../CardUp/CardUp'
import CardUpleft from '../CardUp/CardUpleft/CardUpleft'
import CardDownright from '../CardDown/CardDown'
import './Card.scss'

class Card extends React.Component {
    render() {
        return (      
            <div>
                <div className="Card">
                    <CardUp city={this.props.city} />
                    <CardUpleft data= {this.props.data}/>
                    <CardDownright data= {this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Card;

