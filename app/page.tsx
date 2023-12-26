import Image from "next/image";
import styles from "./page.module.css";
import MyForm from "./Components/MyForm";
import TableFunction from "./Components/Table";

import "@radix-ui/themes/styles.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<MyForm />
				<TableFunction />
			</div>
		</main>
	);
}
