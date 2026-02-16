import Link from "next/link";

const Button = ({ text, className }) => {
  return (
    <Link href="/signup" className={className}>
      {text}{" "}
    </Link>
  );
};

export default Button;
