import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mainFlex">
      <h1 className="mainTitle">Conheça as Naves do Universo Star Wars</h1>
      <Link href="/list/spacecraft">
        <button className={styles.seeAll}>Ver Todas</button>
      </Link>
    </main>
  );
}
