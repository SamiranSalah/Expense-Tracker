import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    // const expenseDate  = new Date(2021, 0, 1);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = "$247.65";
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        
        </Card>
    );
}

export default ExpenseItem;