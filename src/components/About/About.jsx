import React from 'react'
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.photo}></div>
      <div className={style.text}>
        <div className={style.text_title}>Привет.</div>
        <div className={style.text_block}>
          Я копирайтер из Караганды и я обожаю тексты. Мне нравится доносить информацию до людей словами и буквами. Легко и со смыслом.
        </div>
      </div>
    </div>
  )
}

export default About
