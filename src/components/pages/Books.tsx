import { observer } from 'mobx-react-lite'
import books from '../../store/books'
import '../../styles/Books.css'
import BookList from '../BookList'
import Loader from '../UI/Loader/Loader'
import Pagination from '../UI/pagination/Pagination'

const Books = observer(() => {
  return (
    <>
      {
        books.isLoading ?
          <Loader />
          :
          <>
            <div className='total-books'>
              {`Найдено ${books.totalBooks} результатов `}
            </div>
            {
              !!books.totalBooks &&
              <>
                <BookList />
                <Pagination />
              </>
            }
          </>
      }
    </>
  )
})

export default Books