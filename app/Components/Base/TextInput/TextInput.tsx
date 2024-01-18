import { PropsWithChildren, ComponentProps } from "react";

import style from "./style.module.scss";

type Props = {
	id: string;
} & ComponentProps<"input">;

export default function TextInput({ id, children }: PropsWithChildren<Props>) {
	return (
		<div className={style.container}>
			<label
				className="text--small"
				htmlFor={id}
			>
				{children}:
			</label>
			<input
				className="text--small"
				type="text"
				id={id}
			/>
		</div>
	);
}
