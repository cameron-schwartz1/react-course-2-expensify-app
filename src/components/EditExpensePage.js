import React from 'react';
// import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate  } from "react-router-dom";

const EditExpensePage = (props) => {
    
    const navigate = useNavigate();
    return (
        <div>
            <ExpenseForm
            expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    navigate('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                navigate('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        expense: state.expenses.find((expense) => expense.id === params.id)
    }
}


export default connect(mapStateToProps)(EditExpensePage);