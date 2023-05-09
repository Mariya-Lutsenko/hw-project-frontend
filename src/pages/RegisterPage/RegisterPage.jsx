import styles from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { register } from 'redux/auth/auth-operations';


const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <div className={styles.pagecontainer}>
      <h2>Create your accaunt</h2>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};
export default RegisterPage;
