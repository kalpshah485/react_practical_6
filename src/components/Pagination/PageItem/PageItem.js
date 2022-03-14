import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../redux/actions';

function PageItem({ value }) {
    const { curPage, total_pages } = useSelector(state => state.reducer.pagination);
    const { page_data, loading } = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    return (
        <li className={`page-item ${loading ? 'disabled' : ''} ${value === curPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => dispatch(fetchUsers(value, total_pages, page_data))} disabled={value === curPage} >{value}</button>
        </li>
    )
}

export default PageItem