import React from 'react'
import style from "./Cooperation.module.css";

function Сooperation() {
  return (
    <>
      <div className={style.cooperation}>
        <div className={style.cooperation_text}>Я в поиске интересных проектов и открыта к сотрудничеству.
      У вас уже есть проект или вы только на стадии запуска?</div>
        <div className={style.cooperation_photo}></div>
      </div>
      <div className={style.cooperation_button}><a href="https://t.me/jstrekozova" rel="noreferrer" target="_blank">Напиши мне</a></div>
    </>
  )
}

export default Сooperation
