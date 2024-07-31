import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>PJC Japan合同会社</h1>
        <p className={styles.subtitle}>
          私たちは車を軸に社会に役立つサービスを提供していくスタートアップです
        </p>
      </div>
      <Image
        className={styles.fv}
        src="/main.png"
        alt="FV画像の背景"
        width={4000}
        height={1200}
      />
    </section>
  );
}
