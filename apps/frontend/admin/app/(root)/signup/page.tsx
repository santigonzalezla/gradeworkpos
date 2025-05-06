import styles from './page.module.css';
import SignInForm from "@/app/components/shared/SignInForm";
import Logo from "@/app/components/shared/Logo";
import React from "react";
import SignUpForm from "@/app/components/shared/SignUpForm";

const SignUpPage = () =>
{
    return (
        <div className={styles.login}>
            <div className={styles.navbar}>
                <Logo/>
            </div>
            <div className={styles.container}>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUpPage;