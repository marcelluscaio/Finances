import style from "./style.module.scss";
import { PropsWithChildren, ReactNode } from "react";

export default function InputContainer({ children }: PropsWithChildren) {
	return <div className={style.container}>{children}</div>;
}
