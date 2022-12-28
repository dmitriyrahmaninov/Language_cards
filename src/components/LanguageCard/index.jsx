import React from 'react';
import s from './index.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { changeCard, deleteCard } from '../../store/reducer/languageReducer';


export default function LanguageCard({ id, rus, eng, type }) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.language);
    
    return (
        <div className={s.card}
            onClick={() => dispatch(changeCard(id))}
            onDoubleClick={() => dispatch(deleteCard(id))}
            style=
            {
            type === 'ru'
                ? {backgroundColor: 'white' }
                : {backgroundColor: '#2980b9'}
            }>
            { type === 'ru'
                ? <p style={{color: '#2980b9'}}>{rus}</p>
                : <p style={{color: 'white'}}>{eng}</p>
            }
        </div>
    )
}
