import UserList from './components/UserList/UserList';
import { useEffect } from 'react';
import { fetchUsers } from './redux/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  return (
    <>
      <UserList />
      <ToastContainer />
    </>
  );
}

export default App;
