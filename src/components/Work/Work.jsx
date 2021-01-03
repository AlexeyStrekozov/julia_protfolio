import React from 'react'
import style from "./Work.module.css";

function Work() {
  return (
    <div className={style.work}>
      <div className={style.work_title}>Что я могу сделать?</div>
      <div className={style.work_block}>
        <span>Тексты, которые помогут вашему проекту:</span>
        <ul>
          <li>работать на конкретную аудиторию и цеплять ее</li>
          <li>увеличить вовлеченность читателей</li>
          <li>просто и со вкусом донести информацию о вас и вашем продукте</li>
        </ul>
        <span className={style.target}>Моя цель не просто написать 1000 знаков и получить деньги. Моя работа - искать и упаковывать смыслы. </span>
      </div>
      <div className={style.work_button}><a href="https://drive.google.com/drive/mobile/folders/1wxK-vTDgqa_VVwAYyKVa4wpMbCIEsP-x?usp=sharing" rel="noreferrer" target="_blank">Мои работы</a></div>
    </div>
  )
}

export default Work
