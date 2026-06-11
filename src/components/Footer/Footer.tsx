import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosePlace } from "../../app/placeSlice";
import s from "./Footer.module.scss"
import type { RootState } from "../../app/store";

function Footer() {
    const dispatch = useDispatch();

  const currentPlace = useSelector((state: RootState) => state.place.value)

    const handleClick = useCallback(() => {
        dispatch(choosePlace("all"));
        sessionStorage.setItem("selectedPlace", "all");
    }, [dispatch]);

    return (
    <div className={s.footerContainer}>

        {currentPlace !== "all" &&
        <button className={s.linkButton} type="button" onClick={handleClick}>
            see all
        </button>}

        <h3 className={s.link}>
            <a href="https://t.me/xomnrt">say hi</a>
        </h3>
    </div>
    )
}

export default Footer;
