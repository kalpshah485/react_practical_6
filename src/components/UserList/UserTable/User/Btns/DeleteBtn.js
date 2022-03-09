import React from 'react';
import { Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../../redux/actions';

function DeleteBtn({ user }) {
    const dispatch = useDispatch();
  return (
    <Trash2 onClick={() => dispatch(deleteUser(user.id))} style={{cursor: 'pointer'}} />
  )
}

export default DeleteBtn