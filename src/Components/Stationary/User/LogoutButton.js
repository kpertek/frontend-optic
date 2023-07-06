import EventBus from '../../../common/EventBus';
import './LogoutButton.css'

const LogoutButton = () =>
{
    return (
        <div className="logoutButton" onClick={() => EventBus.dispatch("logout")}></div>
    )
}

export default LogoutButton;