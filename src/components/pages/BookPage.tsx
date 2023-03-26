import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import books from '../../store/books';
import '../../styles/BookPage.css';
import { IImageLinks } from '../types';
import Loader from '../UI/Loader/Loader';


const BookPage = observer(() => {

  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    books.loadBookItem(params.id || '');
  }, [])


  const onBackButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    navigate(-1);
  }

  const getBestImage = (obj : IImageLinks | undefined): string | undefined => {
    if (!obj) return undefined;
    return obj['small'] || obj['thumbnail'] || obj['smallThumbnail'];
  }

  return (
    <>
      {
        books.isLoading ?
          <Loader />
          :
          <div className='book-page'>
            <button className='btn-back' onClick={onBackButton}>Назад</button>
            <div className='book-image'>
              <img src={getBestImage(books.bookItem?.volumeInfo.imageLinks)} alt="" />
            </div>
            <div className='book-info'>
              <div className='book-info--categories'>{books.bookItem?.volumeInfo.categories}</div>
              <div className='book-info--title'>{books.bookItem?.volumeInfo.title}</div>
              <div className='book-info--authors'>{books.bookItem?.volumeInfo.authors?.join(', ')}</div>
              <div className='book-info--description'>{books.bookItem?.volumeInfo.description}</div>
            </div>
          </div>
      }
    </>
  )
}
)

export default BookPage