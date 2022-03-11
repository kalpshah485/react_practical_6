import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function PrevBtn({ value }) {
    const dispatch = useDispatch();
    const { total_pages } = useSelector(state => state.reducer.pagination);
    const { page_data } = useSelector(state => state.reducer);
    return (
        <li className={`page-item ${value === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value - 1,total_pages,page_data))}>Previous</button>
        </li>
    )
}

export default PrevBtn