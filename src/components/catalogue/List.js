import React  from 'react';
import { Link, Route, Switch} from 'react-router-dom'
import Rate from './actions/Rate'
import Progress from './actions/Progress'


function List(props) {

  const {booksList, setList, match, editRating, editProgress, bookToRate, setBookToRate, updateRating, bookInProgress, setBookInProgress,  updateProgress} = props
 

  
  return (
    <div className="App">
  <h1>Books catalogue</h1>

    <table>
    <thead>
      <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Rating</th>
        <th>Progress</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {booksList.length > 0 ? 
        (booksList.map(book => ( 
      <tr key={book.id}>
        <td>{book.author}</td>
        <td>{book.title}</td>
        <td>{book.rating}</td>
        <td>{book.progress}%</td>
        <td>
          <Link to={`${match.url}/${book.id}/rate`}><button onClick={() => editRating(book)}>Rate</button></Link>
          <Link to={`${match.url}/${book.id}/progress`}><button onClick={() => editProgress(book)}>Set progress</button></Link>
          
        </td>
      </tr>
        ))
    ) : (
        <tr>
        <td colSpan={3}>No books</td>
      </tr>
    )}
    </tbody>
  </table>


<Switch>
<Route path={`${match.path}/:bookId/rate`} render={() => 
     <Rate 
     bookToRate={bookToRate}
     setBookToRate={setBookToRate}
     updateRating={updateRating}
      />}
  />

<Route path={`${match.path}/:bookId/progress`} render={() => 
         <Progress 
         bookInProgress={bookInProgress}
         setBookInProgress={setBookInProgress}
         updateProgress={updateProgress}
         />}
  />

</Switch>

    </div>
  );
}


export default List;
