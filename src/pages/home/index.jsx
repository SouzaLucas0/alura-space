import styles from './Home.module.scss'
import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>

            </main>
        </>
    )
}

export default Home;