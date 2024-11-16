import './cost-item.css';

import CostDate from "../cost-date/cost-date";
import Card from "../UI/card/card";

const CostItem = (props) => {

    return (
        <>
            <Card className='cost-item'>
                <CostDate date={props.date} />
                <div className="cost-item__description">
                    <h2>{props.title}</h2>
                    <div className="cost-item__price">{props.price} <span>$</span></div>
                </div>
            </Card>
        </>
    )
}

export default CostItem;