import Image from "next/image";
import styles from "./page.module.css";
import CardComponent from "./ui/components/miniCompos/CardCompo";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="CardContainer">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </main>
  );
}
