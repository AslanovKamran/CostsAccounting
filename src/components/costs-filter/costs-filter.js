import './costs-filter.css';

const CostsFilter = (props) => {


    const yearChangeHandler = (event) => {
        const selectedYear = event.target.value;
        props.onYearChange(selectedYear);
    }

    return (
        <div className='costs-filter'>
            <div className='costs-filter__control'>
                <label htmlFor='yearFilter'>Filter by year</label>
                <select value={props.selectedYear} id='yearFilter' onChange={yearChangeHandler}>
                    <option value='All'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default CostsFilter;