import useVolunteers from '../../hooks/usevolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    return (
        <div>
            <h2>Volunteers activities: {volunteers.length}</h2>
            <div
                className="activity-container">
                {
                    volunteers.map(activity => <Activity
                        key={activity._id}
                        activity={activity}

                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;