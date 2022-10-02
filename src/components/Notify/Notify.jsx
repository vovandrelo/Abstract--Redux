import style from "./notify.module.sass";

const Notify = ({message}) => {
    return(
        <span className={style.notify}>{message}</span>
    )
}

export default Notify;