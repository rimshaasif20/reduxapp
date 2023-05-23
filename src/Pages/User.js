
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AddUser.css";

import {  useSelector,useDispatch } from 'react-redux';
import {  addUsers , updateUser} from '../Actions';
import { useNavigate } from "react-router-dom";
  

const validationSchema = Yup.object({
  username: Yup.string().email('Invalid Email').required('Username is required'),
  password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters'),
});

const User = () => {
  const users = useSelector((state) => state.users.users);
  const editingUser = useSelector((state) => state.users.editingUser);
  const navigate = useNavigate();
  let initialValues = null;
  debugger;
  if(editingUser) {
    initialValues = {
      id:editingUser.id,
      username: editingUser.username,
      password: editingUser.password,
    };
  }
  else {
    initialValues = {
      id:0,
      username: "",
      password: "",
    };
  }
 
 // const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
 
  
  const handleSubmit = (values,{ resetForm }) => {
     
    const newRecordId = users.length + 1;
    const newRecord = { id: newRecordId, username:values.username,password:values.password };
   // const update = { id: values.id, username:values.username,password:values.password };
  // dispatch(addUsers(newRecord));
   
    if (editingUser) {
      const updatedRecord = {id: editingUser.id, username:values.username,password:values.password}
      
      dispatch(updateUser(updatedRecord));

    } else 
    {
      dispatch(addUsers(newRecord));
    }
    // addUsers(values);
    resetForm();
    navigate('/list')
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form >
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <Field type="email" id="username" name="username"  placeholder='Enter UserEmail'  defaultValue={editingUser?.username}  />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" placeholder='Enter Password' defaultValue={editingUser?.password} />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" >Login</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default User;

