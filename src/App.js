import UserList from './components/UserList/UserList';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  
  return (
    <>
      <UserList />
    </>
  );
}

export default App;
