import React, { Fragment} from 'react';



const Book = ({title, published}) => {

return (

<Fragment>

<h4>
    {title}
</h4>
<h3>{published}</h3>
</Fragment>
)
}

export default Book;