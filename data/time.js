const formatTime = () => {
    const date = new Date();
    const hour = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    const time = `${hour}:${minutes}`;
    return time;

}

module.exports = {formatTime};