import { ComponentProps, PropsWithChildren } from "react";

type Props = {
	type?: "primary" | "secondary";
} & ComponentProps<"button">;

export default function Button({ children }: PropsWithChildren<Props>) {
	return <button className="button">{children}</button>;
}
