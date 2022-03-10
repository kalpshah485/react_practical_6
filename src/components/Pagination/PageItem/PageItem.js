import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function PageItem({ value }) {
    const { curPage } = useSelector(state => state.reducer.pagination);
    const dispatch = useDispatch();
    return (
        <li className={`page-item ${value === curPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value))} disabled={value === curPage} >{value}</button>
        </li>
    )
}

export default PageItem