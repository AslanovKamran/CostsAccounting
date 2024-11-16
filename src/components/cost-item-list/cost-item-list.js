import './cost-item-list.css'

import CostItem from "../cost-item/cost-item";
import Card from '../UI/card/card';
import CostsFilter from '../costs-filter/costs-filter';
import { useState } from 'react';
import CostsDiagram from '../costs-diagram/costs-diagram';


const CostItemList = (props) => {
    const data = props.costs;

    const [selectedYear, setSelectedYear] = useState('All');

    const yearChangeHandler = (year) => setSelectedYear(year);

    const filteredData = selectedYear === 'All'
        ? data
        : data.filter((el) => el.date.getFullYear().toString() === selectedYear);

    let content = <p>No items found for the selected year 😥</p>;

    if (filteredData.length !== 0) {
        content = filteredData.map((el) => (
            <CostItem
                date={el.date}
                title={el.title}
                price={el.price}
                key={el.id}
            />
        ))
    };

    return (
        <>
            <Card className="cost-list">
                <CostsFilter selectedYear={selectedYear} onYearChange={yearChangeHandler} />
                <CostsDiagram items = {filteredData}/>
                {content}
            </Card>
        </>
    )
}
export default CostItemList;