import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function PrevBtn({ value }) {
    const dispatch = useDispatch();
    return (
        <li className={`page-item ${value === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value - 1))}>Previous</button>
        </li>
    )
}

export default PrevBtn