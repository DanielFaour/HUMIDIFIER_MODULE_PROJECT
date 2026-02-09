function ProgressBar({ data, upper, lower }) {
    return (
        <div id="indicator" style={{'--fill': `${data}%`, '--color': data > upper || data < lower ? "red" : "green"}}></div>
    );
}
export default ProgressBar;


