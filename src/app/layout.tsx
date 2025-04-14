import "./globals.css";
import Link from "next/link";
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.headerSpace}>
            <h2 className={styles.logo}>EXERCICIO 3 - CATÁLOGO DE ESPAÇONAVES</h2>
            <nav className={styles.navigate}>
                <Link className={styles.mainLink} href="/">Início</Link>
                <Link className={styles.mainLink} href="/list/spacecraft">Espaçonaves</Link>
                <Link className={styles.mainLink} href="/list/categories">Categorias</Link>
            </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
