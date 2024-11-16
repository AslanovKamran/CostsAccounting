import Card from '../UI/card/card';
import './cost-date.css';


const CostDate = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.getDate();

    return (
        <Card className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </Card>
    )
}
export default CostDate;