import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props.match.params.id);
  return (
    <div>
      <button onClick={() => props.history.go(-1)}>뒤로가기</button>
      <button onClick={() => props.history.goBack()}>고 백</button>
      <button onClick={() => props.history.push('/')}>이동</button>
      <Login />
    </div>
  );
};

export default LoginPage;
