import styles from './Menu.module.scss'
import React from 'react'
import home from '../../assets/icons/home-ativo.png'
import maisCurtidas from '../../assets/icons/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icons/mais-vistas-inativo.png'
import novas from '../../assets/icons/novas-inativo.png'
import surpreendaMe from '../../assets/icons/surpreenda-me-inativo.png'

const Menu = () => {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="Ícone do menu Home" />
                <a href="#">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="Ícone do menu Mais curtidas" />
                <a href="#">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="Ícone do menu Mais vistas" />
                <a href="#">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="Ícone do menu Novas" />
                <a href="#">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="Ícone do menu Surpreenda-me" />
                <a href="#">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu;