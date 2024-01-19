import { ComponentProps } from "react";
import InputContainer from "../InputContainer/InputContainer";

type Props = {
	id: string;
	label: string;
	listItems: string[];
} & ComponentProps<"input">;

export default function TextSelectInput({ id, label, listItems }: Props) {
	/* const isServer = typeof window === "undefined" ? false : true; */
	console.log("Loguei!");
	return (
		<InputContainer>
			<label htmlFor={id}>{label}:</label>
			<input
				id={id}
				type="text"
				list={`${id}-list`}
			/>
			<datalist id={`${id}-list`}>
				{listItems.map((item) => (
					<option
						key={item}
						value={item}
					></option>
				))}
			</datalist>
		</InputContainer>
	);
}
