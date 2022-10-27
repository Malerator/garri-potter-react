import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from '../../ui/Container/Container'
import { Card } from '../../ui/Card/Card'
// import { data } from '../../hp'
import s from './Main.module.css'
import { Preloader } from '../Preloader/Preloader'
import { Alert } from '../Alert/Alert'

export const Main = ({name, school, liked, like, dislike, isLoading, urlGp, error}) => {

  const searchName = urlGp.filter((elem) => !name || elem.name.toLowerCase().trim().includes(name)).filter((elem) => school === 'All school' || elem.house === school)
  return (
    <main>
      <Container>
        {isLoading && <Preloader />}
        {error && <Alert />}
        <div className={s.wrapper_cards}>
          {searchName.map((elem, index) => (
            <Card like={like} dislike={dislike} isLiked={liked?.includes(elem.name)} key={index} src={elem.image} name={elem.name} actor={elem.actor} gender={elem.gender} house={elem.house} wand={elem.wand.core} alive={elem.alive}/>
          ))}
        </div>
      </Container>
    </main>
  )
}
