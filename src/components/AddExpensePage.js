import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { useNavigate  } from "react-router-dom";
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
    const navigate = useNavigate();
    
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                if (expense.description && expense.amount) {
                    props.dispatch(addExpense(expense));
                    navigate('/');
                }
            }}
        />
    </div>
)};

export default connect()(AddExpensePage);