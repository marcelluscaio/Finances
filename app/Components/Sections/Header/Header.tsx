import Container from "../../Base/Container/Container";
import style from "./style.module.scss";

export default function Header() {
	return (
		<header className={style.header}>
			<Container>
				<h1 className={`${style.title} title--medium`}>Título</h1>
			</Container>
		</header>
	);
}
