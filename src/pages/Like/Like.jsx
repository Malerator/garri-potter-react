import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container/Container';
import { Card } from '../../ui/Card/Card';
import s from '../../components/Main/Main.module.css'


export const Like = ({ like, dislike, urlGp, liked }) => {

  const likedCards = urlGp.filter((elem) => liked.includes(elem.name));
  return (
    <>
    <Link to='/'>
    <button>Назад</button>
    </Link>
    <Container>
      <div className={s.wrapper_cards}>
          {likedCards.map((elem, index) => (
            <Card like={like} dislike={dislike} isLiked={liked?.includes(elem.name)} key={index} src={elem.image} name={elem.name} actor={elem.actor} gender={elem.gender} house={elem.house} wand={elem.wand.core} alive={elem.alive}/>
          ))}
        </div>
    </Container>
    
    </>
  )
}
