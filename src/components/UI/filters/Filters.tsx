import React from 'react'
import header from '../../../store/header';
import { CategoriesTypes, SortTypes } from '../../types';
import cl from "./Filters.module.css";

const categories: CategoriesTypes[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sort: SortTypes[] = ['relevance', 'newest'];

const Filters = () => {

    const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        header.setCategory(e.target.value as CategoriesTypes)
    }
    
    const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        header.setSort(e.target.value as SortTypes)
    }

    return (
        <div className={cl.filters}>
            <div className={cl.filterItem} >
                Категории
                <select onChange={onCategoryChange}>
                    {categories.map((value, i) => <option key={i} value={value}>{value.toUpperCase()}</option>)}
                </select>
            </div>
            <div className={cl.filterItem} >
                Сортировать по
                <select onChange={onSortChange}>
                    {sort.map((value, i) => <option key={i} value={value}>{value.toUpperCase()}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Filters