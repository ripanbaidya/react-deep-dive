function ShowTime() {
    const now = new Date();

    const currentTime = now.toLocaleDateString();
    const currentDate = now.toLocaleTimeString();
    return (
        <p className="lead">This is the current time: {currentTime} - {currentDate}</p>
    );
}

export default ShowTime