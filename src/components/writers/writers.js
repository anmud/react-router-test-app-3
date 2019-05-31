import React, {Fragment} from 'react';
import { Link, Route } from 'react-router-dom'
import Writer from './writer/Writer'
 
const Writers = ({match, writers}) => {

return (
<Fragment>
   <ul>
    {
        writers.map(({id, name}) => 
            <li key={id}>
                <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
            )
    }
   </ul>

 <Route exact path={`${match.url}`} render={ () => <h3>Please, select the writer</h3>}/>
 <Route path={`${match.url}/:writerId`} render={(props) => <Writer {...props} {...writers.find(writer => Number(writer.id) === Number(props.match.params.writerId))} />}/>

 
</Fragment>


// {...writers.find(writer =>  writer.id === match.params.writerId) }
    )
}

export default Writers;