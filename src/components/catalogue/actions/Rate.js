import React  from 'react';



function Rate({match, bookToRate, setBookToRate, updateRating}) {
  

  const handleInputChange = (event) => {
    const { name, value } = event.target
   return setBookToRate({ ...bookToRate, [name]: value })
  }



  return (
    <div>

      <h3>Set you rating (1-5)</h3>

      <p>{bookToRate.author} : </p>
      <p>"{bookToRate.title}"</p> 
      <br />
      <input type="text" name="rating" value={bookToRate.rating} onChange={handleInputChange} />
      <button onClick={() => updateRating({bookToRate: bookToRate, id: bookToRate.id})}>Rate</button>
      <button onClick={() => {
   
        } }>Cancel</button>
      <br />


    </div>
  );
}

export default Rate;