import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

const Button = ({ onClick, children, className = 'custom-button' }: ButtonProps) => {
  return (
    <div role="button" aria-label="button" tabIndex={0} onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Button;
