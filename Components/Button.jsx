import Link from "next/link";

const Button = ({text, className}) => {

    return(
        <Link href="/SignUp" className={className}>{text} </Link>
    );
};

export default Button;