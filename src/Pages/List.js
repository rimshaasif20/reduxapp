import './List.css';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, searchUser, userToBeUpdated } from '../Actions';
import { useNavigate } from "react-router-dom";
// import {Navigate} from 'react-router-dom'

const List = () => {
  // const navigate = Navigate();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
 //Delete dispatch
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
//search dispatch
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch(searchUser(searchTerm));
  };
  //edit dispatch

  const handleUpdate = (user) => {
    dispatch(userToBeUpdated(user));
    navigate('/');
  };

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="table-container">
      <h2>Users List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by username"
        onChange={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username ? user.username : ''}</td>
              <td>{user.password ? user.password : ''}</td>
              <td>
                <Button variant="primary" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
                <Button variant="primary" style={{ marginLeft: '5px' }} onClick={() => handleUpdate(user)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
