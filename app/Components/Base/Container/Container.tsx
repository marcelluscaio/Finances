import { ReactNode } from "react";

type ContainerProps = {
	tag?: "div" | "section";
	children: ReactNode;
};

export default function Container({ tag = "div", children }: ContainerProps) {
	const Tag = tag;
	return <Tag className="container">{children}</Tag>;
}
