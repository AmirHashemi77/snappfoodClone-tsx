import React, { FC } from 'react';
import style from './LogInAndSignUpPopUp.module.scss';
import { AppDispatch } from '../../Store';
import { useDispatch } from 'react-redux';
import { RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice';
import LogIn from './LogIn';
import PasswordLogIn from './PasswordLogIn';
import SignUp from './SignUp';
import { AuthStep } from '../../Model/authStepModel';



const LogInAndSignUpPopUp:FC = () => {
  const dispatch:AppDispatch=useDispatch()
  const step=useSelector((state:RootState)=>state.auth.stepName)
  const hasUser=useSelector((state:RootState)=>state.auth.hasUser);
  const showLoginPopUp=()=>{
      dispatch(uiSliceAction.popUpHandler('logIn'))
  }
  return (
    <>
    <div onClick={showLoginPopUp} className={style.backDrop}></div>
        <div className={style.container}>
            {step===AuthStep.phoneNumber && <LogIn/>}
            {step===AuthStep.password && hasUser && <PasswordLogIn/>}
            {step===AuthStep.signup && !hasUser && <SignUp/>}

        </div>
    </>

  );
};
export default LogInAndSignUpPopUp;