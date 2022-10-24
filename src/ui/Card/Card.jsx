import React from 'react'
import s from './Card.module.css'

export const Card = ({src, name, actor, gender, house, wand, alive}) => {
  return (
    <div className={s.card}>
      <div className={s.card_image}>
        <img src={src} alt={name} width="334" height="192"/>
        <div className={s.card_items}>
        <h3 className={s.card_items_h3}>{name}</h3>
        <p className={s.card_items_p}>Actor: {actor}</p>
        <p className={s.card_items_p}>Gender: {gender}</p>
        <p className={s.card_items_p}>House: {house}</p>
        <p className={s.card_items_p}>Wand: {wand}</p>
        <p className={s.card_items_p}>Alive: {alive ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  )
}
