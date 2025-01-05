import { useState } from 'react';
import styles from './Paginator.module.css';

export const Paginator = ({ totalCount, pageSize, pagesBlockSize, currentPage, onPageClick }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pagesBlocksCount = Math.ceil(pagesCount / pagesBlockSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [currentPagesBlock, setCurrentPagesBlock] = useState(1);

    const leftPagesBlockBorder = currentPagesBlock * pagesBlockSize - pagesBlockSize + 1;
    const rightPagesBlockBorder = currentPagesBlock * pagesBlockSize; 
    
    return (
        <div className={styles.paginator}>
            {currentPagesBlock > 1 && <button onClick={() => setCurrentPagesBlock(--currentPagesBlock)}>{`<<`}</button>}

            <div className={styles.pagination}>
                {pages
                    .filter((page) => page >= leftPagesBlockBorder && page <= rightPagesBlockBorder)
                    .map((page) => (
                        <span
                            className={currentPage === page ? styles.activePage : ""}
                            onClick={() => onPageClick(page)}
                            key={`page-${page}`}
                        >
                            {page}
                        </span>
                    ))
                }
            </div>

            {currentPagesBlock < pagesBlocksCount && <button onClick={() => setCurrentPagesBlock(++currentPagesBlock)}>{`>>`}</button>}
        </div>
    );
};
