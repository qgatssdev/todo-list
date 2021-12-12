import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  const dispatch = useDispatch();
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  );
};

export default TodoItem;
