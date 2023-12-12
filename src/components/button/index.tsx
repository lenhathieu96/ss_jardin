import BaseButton from "./base_button";
import { BaseButtonProps } from "./index.props";

function Button(props: Readonly<BaseButtonProps>) {
  return <BaseButton {...props} />;
}

export default Button;
