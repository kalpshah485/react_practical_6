import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function NextBtn({ value }) {
    const {total_pages} = useSelector(state => state.reducer.pagination);
    const dispatch = useDispatch();
    return (
        <li className={`page-item ${value === total_pages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value + 1))}>Next</button>
        </li>
    )
}

export default NextBtn