import { PropsWithChildren } from "react";

import style from "./style.module.scss";

type Props = {
	id: string;
};

export default function TextInput({ id, children }: PropsWithChildren<Props>) {
	return (
		<div className={style.container}>
			<label htmlFor={id}>{children}</label>
			<input
				type="text"
				id={id}
			/>
		</div>
	);
}
