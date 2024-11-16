import Diagram from '../diagram/diagram';
import './costs-diagram.css'

const CostsDiagram = (props) => {
    const digramDataSets = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ]

    for (const item of props.items) {
        const costMonth = item.date.getMonth();
        digramDataSets[costMonth].value += Number(item.price)
    }

    return (
        <Diagram dataSets={digramDataSets} />
    )
}

export default CostsDiagram;