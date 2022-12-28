import React from 'react';
import s from './index.module.sass';
import { useDispatch } from 'react-redux';
import { changeEngLanguage, changeRusLanguage } from '../../store/reducer/languageReducer';

export default function ChangeLanguage() {
    const dispatch = useDispatch();
    const changeEng = () => dispatch(changeEngLanguage());
    const changeRus = () => dispatch(changeRusLanguage());

    return (
        <div className={s.btn_container}>
            <button type='button' onClick={changeEng}>eng</button>
            <button type='button' onClick={changeRus}>rus</button>
        </div>
    )
}
