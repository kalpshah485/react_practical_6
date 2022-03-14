import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NextBtn from './NextBtn/NextBtn';
import PageItem from './PageItem/PageItem';
import PrevBtn from './PrevBtn/PrevBtn';

function Pagination() {
    const [pageList, setPageList] = useState([]);
    const { curPage, total_pages } = useSelector(state => state.reducer.pagination);
    useEffect(() => {
        let pages = [];
        for (let i = 0; i < total_pages; i++) {
            pages.push(i + 1);
        }
        setPageList(pages);
    }, [total_pages]);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <PrevBtn value={curPage} />
                {
                    pageList.map(page => {
                        return <PageItem key={page} value={page} />
                    })
                }
                <NextBtn value={curPage} />
            </ul>
        </nav>
    )
}

export default Pagination