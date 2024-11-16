import DiagramBar from '../diagram-bar/diagram-bar';
import './diagram.css';


const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);
    const maxMonthPrice = Math.max(...dataSetsValues);

    return (
        <div className='diagram'>
            {
                props.dataSets.map((dataSet) => (
                    <DiagramBar
                        value={dataSet.value}
                        maxValue={maxMonthPrice}
                        label={dataSet.label}
                        key={dataSet.label} />
                ))
            }
        </div>
    )
}

export default Diagram;

