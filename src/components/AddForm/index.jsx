import React from 'react';
import s from './index.module.sass';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/reducer/languageReducer';
import ChangeLanguage from '../ChangeLanguage';

export default function AddForm() {

    const dispatch = useDispatch();
    
    const submit = event => {
        event.preventDefault();
        const { ru, en } = event.target;
        dispatch(addCard({rus: ru.value, eng: en.value}));
        ru.value = '';
        en.value = '';
    }
    return (
        <form onSubmit={submit}
            className={['wrapper', s.add_form].join(' ')}>
            <ChangeLanguage/>
            <div className={s.input_container}>
                <input type="text" name="ru" placeholder='Russian word' />
                <input type="text" name="en" placeholder='English word' />
            </div>
            <button>Added word</button>
        </form>
    )
}
