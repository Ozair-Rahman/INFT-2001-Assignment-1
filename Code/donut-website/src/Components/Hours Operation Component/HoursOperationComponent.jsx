import './HoursOperationComponent.css';

const HoursOperationComponent = () => {
    return (
        <>
        <div className="operationHours">
            <h1 className="hoHeading">Hours of Operation</h1>
            <h2 className="daysHeading">Wednesday - Sunday </h2>
            <p className="hoursHeading">8-5 PM OR SOLD OUT!</p>
            <p className="hoursHeading">8-9 AM PREORDER PICKUP ONLY</p>
            <h2 className='walkInHeading'>Walk Ins</h2>
            <p className="walkinSubHeading">9-5 PM OR UNTIL SOLD OUT!</p>
        </div>
        </>
    );
}

export default HoursOperationComponent;