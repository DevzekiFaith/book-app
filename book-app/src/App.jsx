import React, { useState, useEffect } from 'react';
import Axios from "axios";
import ListofUsers from './componenet/ListofUsers/ListofUsers';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch data from the server and update the list of users
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => { 
        setList(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className=''>
      <h1>This is the major time for work</h1>
      <div>
        {/* Map over the list of users and render ListofUsers component for each user */}
        
        {list.map((item,id) => (
          <ListofUsers
            key={id} main={item} />
        ))}
      </div>
    </div>
  );
}

export default App;