import './diagram-bar.css';

const DiagramBar = (props) => {


    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        let ratio = (Math.round(props.value / props.maxValue * 100));
        barFillHeight = ratio.toString() + '%';
    }

    return (
        <div className='diagram-bar'>
            <div className='diagram-bar__inner'>
                <div className='diagram-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='diagram-bar__label'>{props.label}</div>
        </div>
    )
}

export default DiagramBar;