import "./custom.css"
import Graph from "./Images/graph.svg"
import User from "./Images/user.svg"
import Setting from "./Images/settings.svg"
import Card from "./Card"

function TimerHome(props) {
    return (
        <>
        <div className="Container">
            <div className="Nav">
                <div className="Logo">
                    {props.name}
                </div>
                <div className="Nav-Icons">
                    <ul className="list-box">
                        <li><img src={Graph} alt=""/> Report</li>
                        <li><img src={Setting}  alt=""/>Setting</li>
                        <li><img src={User} alt=""/>Login</li>
                    </ul>
                </div>
            </div>
            {/* Nav Bar Ends Here */}
            <Card />
        </div>
        
        </>
    )
}

export default TimerHome;