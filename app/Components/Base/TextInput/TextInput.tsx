import { PropsWithChildren, ComponentProps } from "react";

import InputContainer from "../InputContainer/InputContainer";

import style from "./style.module.scss";

type Props = {
	id: string;
} & ComponentProps<"input">;

export default function TextInput({ id, children }: PropsWithChildren<Props>) {
	return (
		<InputContainer>
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
		</InputContainer>
	);
}
