import { ReactNode } from "react";
import style from "./style.module.scss";

type ContainerProps = {
	tag?: "div" | "section";
	children: ReactNode;
};

export default function Container({ tag = "div", children }: ContainerProps) {
	const Tag = tag;
	return <Tag className={style.container}>{children}</Tag>;
}
