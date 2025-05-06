import Link from "next/link";
import Image from "next/image";
import {APP_NAME} from "@/lib/constants";

const Logo = () =>
{
    return (
        <Link href="/">
            <Image
                src={"/logo.png"}
                width={200} // La mitad del original
                height={200 * (125 / 357)}
                alt={`${APP_NAME} logo`}
                priority
            />
        </Link>
    )
}

export default Logo;