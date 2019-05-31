import React, {useState, Fragment} from 'react';
import './App.css' 
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Writers from './components/writers/writers'
import List from './components/catalogue/List'



 const App = () => {

  const [writers, setWriters] = useState([
    {
    id: 1,
    name: 'Joseph Campbel',
    description: 'An American Professor of Literature at Sarah Lawrence College who worked in comparative mythology and comparative religion. His work covers many aspects of the human experience. Campbell\'s most well-known work is his book The Hero with a Thousand Faces (1949), in which he discusses his theory of the journey of the archetypal hero shared by world mythologies, termed the monomyth.',
    books: [
      {bookId: 1,
      writerId: 1,
      title: "Self-Reliance",
      published: 1841
      },
      {bookId: 2,
        writerId: 1,
        title: "Nature",
        published: 1836
        }
    ]
  },
    {
      id: 2,
      name: 'Carl Jung',
      description: 'A Swiss psychiatrist and psychoanalyst who founded analytical psychology. Jung worked as a research scientist at the famous Burghölzli hospital, under Eugen Bleuler.',
      books: [
        {bookId: 1,
          writerId: 2,
          title: "Book",
          published: 1931
          },
          {bookId: 2,
            writerId: 2,
            title: "Book-Book",
            published: 1967
            }
      ]
    },
      {
        id: 3,
        name: 'Rajneesh (Osho)',
        description: "an Indian spiritual guru, philosopher and the leader of the Rajneesh movement. During his lifetime he was viewed as a controversial new religious movement leader and mystic.",
        books: [
          {bookId: 1,
            writerId: 3,
            title: "OshoBook",
            published: 1931
            },
            {bookId: 2,
              writerId: 3,
              title: "OshoBook-2",
              published: 1967
              }
        ]
      },

  ])



  const [booksList, setList] = useState([
    {
    id: 1,
    title: 'My first Book',
    author: 'Joseph Campbel',
    rating: 0,
    pages: 145,
    finishedPages: 0,
    progress: 0
  },
  {
    id: 2,
    title: 'My first Book',
    author: 'Joseph Campbel',
    rating: 0,
    pages: 300,
    finishedPages: 0,
    progress: 0
  },
  {
    id: 3,
    title: 'My first Book',
    author: 'Joseph Campbel',
    rating: 0,
    pages: 250,
    finishedPages: 0,
    progress: 0
  },
  ])


  const [bookToRate, setBookToRate] = useState({
    id: "0",
    author: " ",
    title: " ",
    rating: 0
  })

  const editRating = book => {
    return setBookToRate({
      ...bookToRate,
      id: book.id,
      author: book.author,
      title: book.title,
      rating: book.rating
    })
  }


  const updateRating =  ({ bookToRate, id }) => {
     setList(booksList.map(book => (book.id === id ? { ...book, rating: bookToRate.rating } : book)))
   }


   const [bookInProgress, setBookInProgress] = useState({
    id: 0,
    author: " ",
    title: " ",
    pages: 0,
    finishedPages: 0,
    progress: 0,
  })

  const editProgress = book => {
    return setBookInProgress({
      ...bookInProgress,
      id: book.id,
      author: book.author,
      title: book.title,
      pages: book.pages,
      finishedPages: book.finishedPages,
      progress: book.progress
    })
  }


  const updateProgress =  ({ bookInProgress, id }) => {
    setList(booksList.map(book =>
      (book.id === id ? { ...book, finishedPages: bookInProgress.finishedPages, progress: (Math.round((bookInProgress.finishedPages / bookInProgress.pages) * 100)) } : book)))
   }



  return (
    <Router>

     <Fragment>
    
      <ul>
        <li>
        <Link to="/ ">Home</Link>
        </li>
        <li>
          <Link to="/writers">Writers</Link>
        </li>
        <li>
          <Link to="/list">Books List</Link>
        </li>
      </ul>
      
      <hr/>
      <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path="/writers"  render={(props) => console.log("props", props) || <Writers {...props} writers={writers}/>} />
      <Route path="/list" render={(props) => 
      <List {...props} 
      booksList={booksList} 
      setList={setList} 
      editRating={editRating} 
      bookToRate={bookToRate}
      setBookToRate={setBookToRate} 
      updateRating={updateRating}
      bookInProgress={bookInProgress}
      setBookInProgress={setBookInProgress}
      editProgress={editProgress}
      updateProgress={updateProgress}
      />}/>
      <Route render={() => <h3>Not found</h3>}/>
      </Switch>
       
    </Fragment>


    </Router>
    
  );
}

export default App;
