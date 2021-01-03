import React from 'react'
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div>
          <svg width="100" height="119" viewBox="0 0 100 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.659 37.8556C95.9303 39.7962 95.9229 44.5339 92.6455 46.4642L36.4358 79.5705C33.0996 81.5355 28.8922 79.1262 28.8983 75.2544L29.0026 8.86529C29.0087 4.99348 33.2236 2.59747 36.5536 4.57287L92.659 37.8556Z" fill="#2B6374" fillOpacity="0.88" />
            <path d="M92.659 71.9919C95.9303 73.9325 95.9229 78.6702 92.6455 80.6005L36.4358 113.707C33.0996 115.672 28.8922 113.262 28.8983 109.391L29.0026 43.0016C29.0087 39.1298 33.2236 36.7338 36.5536 38.7092L92.659 71.9919Z" fill="#2B6374" fillOpacity="0.88" />
            <path d="M63.7745 54.9238C67.0458 56.8644 67.0384 61.602 63.761 63.5323L7.55125 96.6387C4.21509 98.6036 0.00770866 96.1944 0.0137905 92.3226L0.118074 25.9335C0.124156 22.0616 4.3391 19.6656 7.66907 21.641L63.7745 54.9238Z" fill="#2B6374" fillOpacity="0.88" />
          </svg>
        </div>
        <div className={style.logo_text}>стрекозова</div>
      </div>
      <div className={style.name}>Я Юля.<div>копирайтер</div></div>
    </div>
  )
}

export default Header
