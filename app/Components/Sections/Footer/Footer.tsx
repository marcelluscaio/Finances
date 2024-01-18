import Container from "../../Base/Container/Container";
import style from "./style.module.scss";

export default function Footer() {
	return (
		<footer className={style.footer}>
			<Container>
				<span>
					© Copyright 2023 - Created by{" "}
					<a href="https://www.caiodeveloper.ca/">Caio Marcellus</a> using{" "}
					<span>...</span> and <span>...</span>. Check the code on the{" "}
					<a href="https://github.com/marcelluscaio/Finances">repository</a>.
				</span>
			</Container>
		</footer>
	);
}
