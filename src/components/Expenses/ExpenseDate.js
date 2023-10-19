import './ExpenseDate.css'
function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-Us', { month: 'long' });
    const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}
export default ExpenseItem;