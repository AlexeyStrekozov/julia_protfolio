import React from 'react'
import style from "./Skills.module.css";

function Skills() {
  return (
    <div className={style.skills}>
      <div className={style.item}>
        <div className={style.img}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
            <g>
              <g fill="#2B6374">
                <path d="m338.6,136.1c-23.6-22.7-54.6-34.4-87.4-33.2-62.9,2.5-114.2,55.7-114.4,118.7-0.1,27.9 9.7,55.1 27.6,76.5 25.8,31 40,70.1 40,110.2 0,0-2.7,18.4 10.4,18.4h82.4c13.4,0 10.4-18.4 10.4-18.4 0-39.2 14.4-78 41.7-112.2 16.9-21.3 25.9-46.9 25.9-74.1 0-32.7-13-63.3-36.6-85.9zm-5.6,147c-29.7,37.2-45.6,79.6-46.2,122.8h-61.6c-0.6-44.1-16.4-87-44.8-121.1-14.7-17.7-22.8-40.1-22.7-63.1 0.2-52 42.5-95.9 94.4-98 27.1-1 52.7,8.7 72.1,27.4 19.5,18.7 30.2,43.9 30.2,70.9-0.1,22.5-7.4,43.6-21.4,61.1z" />
                <path d="m393.2,67.8c-4.1-4.1-10.7-4.1-14.7,0l-25.4,25.4c-4.1,4.1-4.1,10.7 0,14.7s10.7,4.1 14.7,0l25.4-25.4c4.1-4 4.1-10.6 0-14.7z" />
                <path d="m297.6,440.9h-83.2c-5.8,0-10.4,4.7-10.4,10.4 0,5.8 4.7,10.4 10.4,10.4h83.2c5.8,0 10.4-4.7 10.4-10.4 0-5.7-4.7-10.4-10.4-10.4z" />
                <path d="m281.9,480.1h-51.7c-5.8,0-10.4,4.7-10.4,10.4 0,5.8 4.7,10.4 10.4,10.4h51.7c5.8,0 10.4-4.7 10.4-10.4 5.68434e-14-5.7-4.7-10.4-10.4-10.4z" />
                <path d="M256,67.7c5.8,0,10.4-4.7,10.4-10.4V21.4c0-5.8-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4v35.9    C245.6,63.1,250.2,67.7,256,67.7z" />
                <path d="m158.9,108c4.1-4.1 4.1-10.7 0-14.7l-25.4-25.4c-4.1-4.1-10.7-4.1-14.7,0s-4.1,10.7 0,14.7l25.4,25.4c4.1,4 10.7,4 14.7,0z" />
                <path d="m439.6,194.6h-35.9c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h35.9c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4z" />
                <path d="m108.3,194.6h-35.9c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h35.9c5.8,0 10.4-4.7 10.4-10.4s-4.6-10.4-10.4-10.4z" />
              </g>
            </g>
          </svg>
        </div>
        <div className={style.text}>Творческий подход</div>
      </div>
      <div className={style.item}>
        <div className={style.img}>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 349.2 349.2" space="preserve">
            <path d="M337.6,114.25l-139.2-68c-12-6-32.4-6-44.4,0l-142.4,68c-10,4.8-11.6,11.6-11.6,15.2c0,3.6,1.6,10,11.6,15.2l11.6,5.6v64
                c-7.2,2.8-12.4,10-12.4,18s5.2,15.2,12,18l-18,57.2h50.4l-18-57.2c7.2-2.8,12-10,12-18c0-8.4-5.2-15.2-12.4-18v-57.2l21.2,10.4
                v83.2c0,1.2,0.4,2.4,1.2,3.6c2,2.4,39.2,53.2,115.2,53.2s113.2-51.2,114.8-53.2c0.8-1.2,1.2-2.4,1.2-3.6v-82.8l47.2-23.2
                c10-4.8,11.6-11.6,11.6-15.2C348.8,125.85,347.6,119.05,337.6,114.25z M277.6,248.65c-6.4,8-40.8,46.4-103.2,46.4
                c-62.4,0-96.8-38.4-103.2-46.4v-75.6l82.8,39.6c6,2.8,14,4.4,22,4.4c8.4,0,16.4-1.6,22.4-4.8l79.2-38.8V248.65z M332,133.45
                l-48,23.6c-2,0-3.6,0.8-4.4,2.4l-86.8,42c-8.4,4.4-24.8,4.4-33.6,0l-106.8-51.2l122.8-14.4c3.6-0.4,6-3.6,5.6-6.8
                c-0.4-3.6-3.6-6-6.8-5.6l-142.4,16.8l-14.4-6.8c-3.6-1.6-4.4-3.6-4.4-3.6c0-0.4,0.8-2,4.4-3.6l142.4-68.4c4.4-2,10.4-3.2,16.4-3.2
                c6.4,0,12.8,1.2,16.8,3.2l139.2,68c3.6,1.6,4.4,3.2,4.4,4C336.4,129.85,335.2,131.85,332,133.45z" fill="#2B6374" />
          </svg>
        </div>
        <div className={style.text}>Образование журналиста</div>
      </div>
      <div className={style.item}>
        <div className={style.img}>
          <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 511.992 511.992" >
            <path id="XMLID_389_" d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z" fill="#2B6374" />
            <path id="XMLID_391_" d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z" fill="#2B6374" />
            <path id="XMLID_394_" d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z" fill="#2B6374" />
            <path id="XMLID_397_" d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z" fill="#2B6374" />
            <path id="XMLID_398_" d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z" fill="#2B6374" />
            <path id="XMLID_399_" d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z" fill="#2B6374" />
            <path id="XMLID_400_" d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z" fill="#2B6374" />
            <path id="XMLID_424_" d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z" fill="#2B6374" />
            <path id="XMLID_425_" d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z" fill="#2B6374" />
          </svg>
        </div>
        <div className={style.text}>Пунктуальность</div>
      </div>
      <div className={style.item}>
        <div className={style.img}>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512.001 512.001" >

            <path d="M355.181,394.672c-3.398-3.528-9.668-4.54-14.277-0.13c-0.032,0.031-0.065,0.063-0.098,0.095
			c-4.548,4.473-3.726,10.771-0.303,14.275c1.818,1.862,4.441,3.009,7.188,3.009c2.425,0,4.944-0.893,7.091-2.976
			C359.361,404.504,358.582,398.199,355.181,394.672z" fill="#2B6374" />

            <path d="M445.721,202.161c-1.92-5.179-7.671-7.82-12.85-5.904c-5.178,1.918-7.821,7.67-5.903,12.849
			c8.632,23.304,13.008,47.84,13.008,72.927c0,115.778-94.193,209.97-209.97,209.97c-42.962,0-84.261-12.882-119.436-37.254
			c-4.537-3.145-10.768-2.016-13.913,2.524c-3.146,4.539-2.016,10.768,2.524,13.913c38.536,26.701,83.774,40.814,130.826,40.814
			c61.427,0,119.176-23.921,162.612-67.357c43.435-43.435,67.356-101.185,67.356-162.611
			C459.973,254.568,455.177,227.695,445.721,202.161z" fill="#2B6374" />

            <path d="M307.442,65.431c-24.807-8.87-50.86-13.367-77.438-13.367c-61.427,0-119.176,23.921-162.612,67.355
			C23.957,162.856,0.036,220.606,0.036,282.032c0,47.635,14.436,93.337,41.75,132.165c1.946,2.768,5.041,4.247,8.187,4.247
			c1.987,0,3.994-0.591,5.743-1.822c4.517-3.178,5.603-9.415,2.426-13.931c-24.931-35.442-38.109-77.165-38.109-120.66
			c0-115.778,94.193-209.97,209.97-209.97c24.278,0,48.066,4.104,70.705,12.199c5.199,1.86,10.923-0.848,12.781-6.048
			C315.349,73.013,312.641,67.291,307.442,65.431z" fill="#2B6374" />

            <path d="M511.203,82.92c-1.548-3.737-5.193-6.172-9.238-6.172h-52.537l5.65-5.65c3.904-3.904,3.904-10.236,0-14.141
			c-3.905-3.904-10.235-3.904-14.141,0l-5.722,5.722V9.999c0-4.043-2.437-7.69-6.172-9.238c-3.737-1.548-8.038-0.692-10.896,2.167
			l-88.144,88.144c-1.875,1.875-2.929,4.418-2.929,7.07v34.685c-28.841-18.866-62.09-28.77-97.072-28.77
			c-98.135,0-177.975,79.84-177.975,177.975s79.84,177.975,177.975,177.975c32.572,0,64.438-8.883,92.153-25.687
			c4.722-2.863,6.228-9.012,3.366-13.734c-2.862-4.721-9.011-6.23-13.733-3.366c-24.589,14.909-52.87,22.789-81.786,22.789
			c-87.109,0-157.978-70.868-157.978-157.978s70.869-157.978,157.978-157.978c35.57,0,69.118,11.529,97.072,33.34v13.425
			l-18.221,18.221c-21.279-18.071-48.811-28.992-78.851-28.992c-67.262,0-121.983,54.721-121.983,121.983
			s54.721,121.983,121.983,121.983s121.983-54.721,121.983-121.983c0-30.039-10.92-57.571-28.992-78.851l18.293-18.293h13.302
			c21.555,27.625,33.391,61.99,33.391,97.144c0,29.477-8.169,58.228-23.623,83.143c-2.911,4.692-1.466,10.856,3.228,13.767
			c1.641,1.018,3.461,1.503,5.26,1.503c3.346,0,6.614-1.679,8.507-4.729c17.42-28.083,26.626-60.478,26.626-93.684
			c0-34.537-10.145-68.4-28.849-97.144h34.691c2.652,0,5.194-1.054,7.07-2.929l88.144-88.144
			C511.895,90.957,512.75,86.656,511.203,82.92z M331.99,282.032c0,56.235-45.751,101.986-101.986,101.986
			s-101.986-45.751-101.986-101.986c0-56.235,45.751-101.986,101.986-101.986c24.525,0,47.053,8.703,64.665,23.181l-22.772,22.772
			c-11.687-8.761-26.194-13.957-41.892-13.957c-38.593,0-69.99,31.398-69.99,69.99c0,38.593,31.398,69.99,69.99,69.99
			c38.593,0,69.99-31.398,69.99-69.99c0-15.698-5.196-30.205-13.957-41.893l22.772-22.772
			C323.287,234.979,331.99,257.507,331.99,282.032z M222.934,289.103c1.953,1.953,4.511,2.929,7.07,2.929s5.117-0.976,7.07-2.929
			l34.619-34.619c5.241,7.905,8.304,17.374,8.304,27.548c0,27.566-22.427,49.993-49.993,49.993
			c-27.566,0-49.993-22.427-49.993-49.993c0-27.566,22.427-49.993,49.993-49.993c10.175,0,19.643,3.063,27.549,8.304l-34.619,34.619
			C219.029,278.866,219.029,285.197,222.934,289.103z M347.073,150.822v-48.538l68.146-68.146v48.538L347.073,150.822z
			 M409.68,164.891h-48.394l68.146-68.146h48.394L409.68,164.891z" fill="#2B6374" />

            <path d="M81.334,430.299c-1.859-1.859-4.438-2.93-7.068-2.93c-2.641,0-5.22,1.07-7.069,2.93c-1.87,1.86-2.93,4.439-2.93,7.069
			s1.06,5.209,2.93,7.069c1.859,1.86,4.429,2.93,7.069,2.93c2.63,0,5.209-1.07,7.068-2.93c1.86-1.86,2.931-4.439,2.931-7.069
			S83.195,432.169,81.334,430.299z" fill="#2B6374" />

          </svg>
        </div>
        <div className={style.text}>Нацеленность на результат</div>
      </div>

    </div >
  )
}

export default Skills
