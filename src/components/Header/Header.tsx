import s from "./Header.module.scss"

function Header() {
    return (
    <div className={s.headerContainer}>
        <h1 className={s.title}>XO/Travel</h1>
    </div>
    )
}

export default Header;
