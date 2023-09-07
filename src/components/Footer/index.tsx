import styles from './Footer.module.scss'

export default function Footer(){
    return (
        <>
            <footer className={styles.container_footer}>
                <p>Site desenvolvido por <abbr title="lucasbaptistasilva.dev@gmail.com" className={styles.title}>Lucas Baptista</abbr></p>
            </footer>
        </>
    )
}