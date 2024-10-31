import { ReactNode } from "react";
import "../styles/Button.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return <button className="boton">{children}</button>;
}
export default Button;
