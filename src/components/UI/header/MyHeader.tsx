import { observer } from 'mobx-react-lite';
import Filters from '../filters/Filters';
import Search from '../search/Search';
import cl from "./MyHeader.module.css";


const MyHeader = () => {
    return (
        <div className={cl.header}>
            <div className={cl.headerContent}>
                <h1>Поиск книг</h1>
                <Search/>
                <Filters/>
            </div>
        </div>
    )
}

export default MyHeader