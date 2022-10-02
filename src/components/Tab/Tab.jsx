
import style from "./tab.module.sass";

const Tab = ({name, onChange}) => {

    return (
        <li className={style.tab} onClick={onChange}>{name}</li>
    )
}

export default Tab;