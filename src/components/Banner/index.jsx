import styles from './Banner.module.scss'
import React from 'react'
import bannerImg from './banner.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <h1>A galeria mais completa do espaço</h1>
        <img src={bannerImg} alt="Imagem da terra vista do espaço" />
    </div>
  )
}

export default Banner;