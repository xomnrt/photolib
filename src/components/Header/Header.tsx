import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearPlace } from "../../app/placeSlice";
import s from "./Header.module.scss"

function Header() {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(clearPlace());
        sessionStorage.removeItem('selectedPlace');
    }, [dispatch]);

    return (
    <div className={s.headerContainer}>
        <h1 className={s.title} onClick={handleClick}>XO/Travel</h1>
    </div>
    )
}

export default Header;
