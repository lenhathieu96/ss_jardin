import BaseButton from "./base_button";
import { BaseButtonProps } from "./index.props";
import TextButton from "./text_button";

function Button(props: Readonly<BaseButtonProps>) {
  return <BaseButton {...props} />;
}

export default Button;
/**Button with text only & without background and padding */
Button.Text = TextButton;
