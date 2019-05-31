import React, { Fragment} from 'react';
import { Link, Route } from 'react-router-dom'
import Book from './book/Book'


const Writer = ({match: {url}, name, description, books}) => {

return (

<Fragment>

<h1>{name}</h1>
<p>{description}</p>

<ul>
  {books.map(({bookId, title}) => 
  <li key={bookId}>
    <Link to={`${url}/books/${bookId}`}>{title}</Link>
  </li>)}
</ul>
 
  <Route path={`${url}/books/:bookId`} render={(props) => {
    const book = books.find(({bookId}) => Number(bookId) === Number(props.match.params.bookId))
   return !book
    ? (<p>Not found</p>)
    : <Book {...book}/>
  }}/>
</Fragment>
)
}

export default Writer;