import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(setLoading(false));
  }, []);

  const handleClick = (id) => {
    const getUserById = users.find(user => user.id === id);
    setUser(getUserById);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <List users={users} handleClick={handleClick}/>
          </div>
          <div className="col">
            {user && <Details key={user.id} info={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
