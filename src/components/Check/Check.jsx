import React from 'react'
import s from './Check.module.css'

export const Check = ({ name, like, dislike, isLiked }) => {


  return (
    <>
    <label className={s.check}>
        <input checked={isLiked} onChange={() => isLiked ? dislike(name) : like(name)} className={s.check__input} type="checkbox"/>
        <span className={s.check__box}></span>
        </label>
    </>
  )
}
