import Container from "../../Base/Container/Container";
import Title from "../../Base/Title/Title";
import style from "./style.module.scss";

export default function Header() {
	return (
		<header className={style.header}>
			<Container>
				<Title
					level="h1"
					size="big"
				>
					Título
				</Title>
			</Container>
		</header>
	);
}
