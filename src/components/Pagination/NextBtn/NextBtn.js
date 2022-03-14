import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function NextBtn({ value }) {
    const { total_pages } = useSelector(state => state.reducer.pagination);
    const { page_data, loading} = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    return (
        <li className={`page-item ${(loading || value === null || value === total_pages) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value + 1,total_pages,page_data))}>Next</button>
        </li>
    )
}

export default NextBtn