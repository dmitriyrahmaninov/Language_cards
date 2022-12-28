import React from 'react';
import s from './index.module.sass';
import { useSelector } from 'react-redux';
import LanguageCard from '../LanguageCard'

export default function LanguageContainer() {

    const state = useSelector(state => state.language);

    return (
        <div className={['wrappers', s.container].join(' ')}>
            {state.map(el => <LanguageCard key={el.id} {...el} />)}
        </div>
    )
}
