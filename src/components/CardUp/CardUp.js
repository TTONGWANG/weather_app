import React from "react";
import './CardUp.scss'
import Paris from './image/Paris.jpeg'
import Sydney from './image/Sydney.jpeg'
import Beijing from './image/Beijing.jpeg'
import Melbourne from './image/Melbourne.jpeg'
import London from './image/London.jpeg'
import fault from './image/fault.svg'

class CardUp extends React.Component {
    fetchBackground() {
        const { city } = this.props;
        city === 'Paris' ? this.styles = { backgroundImage: `url(${Paris}) ` }
        : city === 'Sydney' ? this.styles = { backgroundImage: `url(${Sydney})` }
        : city === 'Beijing' ? this.styles = {backgroundImage: `url(${Beijing})`}
        : city === 'Melbourne' ? this.styles = {backgroundImage: `url(${Melbourne})`}
        : city === 'London' ? this.styles = {backgroundImage: `url(${London})`}
        :this.styles = { backgroundImage: `url(${fault})` };  
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