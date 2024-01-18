import { PropsWithChildren } from "react";

type Props = {
	id: string;
};

export default function TextInput({ id, children }: PropsWithChildren<Props>) {
	return (
		<div>
			<label htmlFor={id}>{children}</label>
			<input
				type="text"
				id={id}
			/>
		</div>
	);
}
