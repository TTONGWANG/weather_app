import React from "react";
import './CardUp.css'
import Paris from './image/Paris.jpeg'
import Sydney from './image/Sydney.jpeg'
import Beijing from './image/Beijing.jpeg'
import fault from './image/fault.svg'

class CardUp extends React.Component {

    constructor() {
        super();
        this.state = {
            styles: { backgroundImage: '' }
        }
    }

    fetchBackground() {
        // const { city } = this.props;
        // city === 'Paris' ? this.styles = { backgroundImage: `url(${Paris}) ` }
        // : city === 'Sydney' ? this.styles = { backgroundImage: `url(${Sydney})` }
        // : city === 'Beijing' ? this.styles = {backgroundImage: `url(${Beijing})`}
        this.styles = { backgroundImage: `url(${fault})` };  
    }

    render() {
        // console.log(this.props.city)
        // const { city } = this.props
        this.fetchBackground()
        return (
            <div style={this.styles} className="cardup" >
                <h2>{this.props.city}</h2>
                
            </div>
        )
    };
}

export default CardUp;