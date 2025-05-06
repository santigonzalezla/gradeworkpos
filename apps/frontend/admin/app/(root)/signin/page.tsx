import styles from './page.module.css';
import SignInForm from "@/app/components/shared/SignInForm";
import Logo from "@/app/components/shared/Logo";
import React from "react";

const SignInPage = () =>
{
    return (
        <div className={styles.login}>
            <div className={styles.navbar}>
                <Logo />
            </div>
            <div className={styles.container}>
                <SignInForm />
            </div>
        </div>
    );
}

export default SignInPage;