import React from 'react'
import s from './Form.module.css'

export const Form = () => {
  return (
    <form className={s.form}>
          <div>
            <label className={s.label_text} htmlFor="in">Name</label>
            <label className={s.label} htmlFor="in">
              <input id="in" className={s.input} placeholder="Hermione" type="text" />
            </label>
          </div>
          <div>
            <label className={s.label_text} htmlFor="sel">School</label>
            <select id="sel" className={s.select}>
              <option value="all">All school</option>
            </select>
          </div>
        </form>
  )
}
