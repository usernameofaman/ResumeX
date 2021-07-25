import React from "react";

class Card extends React.Component {
    constructor() {
        super();
        this.state = { name: "Pomodoro"}
    }


    render() {
        return (
            <div className="Main-Card">
                <div className="card-options">
                    <ul>
                        <li>{this.state.name}</li>
                        <li>Short Break</li>
                        <li>Long Break</li>
                    </ul>
                </div>
                <div className="timer">
                    <div className="counter">
                    25:00
                    </div>
                </div>
                <div className="start-btn">
                    <button>START</button>
                </div>
            </div>
        )
    }
}

export default Card;