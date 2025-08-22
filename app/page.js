
import Profile from "@/app/components/Profile";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Site criado para a nova disciplina Programação Front-End</h1>
      <Profile/>
    </div>
  );
}
