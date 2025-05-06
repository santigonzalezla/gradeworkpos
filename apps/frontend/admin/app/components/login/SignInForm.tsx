import styles from './css/loginform.module.css';
import { satoshi } from "@/app/fonts/satoshi";
import Link from "next/link";
import SignWithGoogle from "@/app/components/shared/SignWithGoogle";

const SignInForm = async () =>
{
    return (
        <form className={`${satoshi.variable} ${styles.form}`}>
            <div className={styles.top}>
                <h1>Accede a tu cuenta</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.socials}>
                    <SignWithGoogle text={"Inicia sesión con Google"} />
                </div>
                <div className={styles.input}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="user@user.com"
                        required
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password" className={styles.label}>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        minLength={6}
                        placeholder="******"
                    />
                </div>
                <div className={styles.checkboxContainer}>
                    <div>
                        <input
                            id="remember"
                            type="checkbox"
                            className={styles.checkbox}
                        />
                        <label htmlFor="remember" className={styles.rememberLabel}>Recuerdame</label>
                    </div>
                    <a href="#" className={styles.forgotPassword}>¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" className={`${satoshi.variable} antialiased ${styles.formbutton}`}>
                    Iniciar sesión
                </button>
                <p className={styles.signUpText}>
                    ¿Aún no tienes cuenta? <Link href={"/signup"} className={styles.signUpLink}>Regístrate</Link>
                </p>
            </div>
        </form>
    );
};

export default SignInForm;

