import React from 'react'
import s from './Card.module.css'
import { Check } from '../../components/Check/Check.jsx'

export const Card = ({ like, dislike, isLiked, src, name, actor, gender, house, wand, alive }) => {
  return (
    <div className={s.card}>
      <div className={s.card_image}>
        <Check name={name} like={like} dislike={dislike} isLiked={isLiked} />
        <img src={src ? src : 'https://avatars.mds.yandex.net/i?id=6a56b5d2fbdc8874b63e7e7a96cbfd33-5175110-images-thumbs&n=13'} alt={name} width="334" height="192"/>
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
