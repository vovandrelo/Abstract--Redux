
import TabContainer from "../../containers/Tab/TabContainer";
import style from "./tabs.module.sass";


const Tabs = ({ sectionIds }) => {

    return(
        <ul className={style.tabs}>
            {sectionIds.map(id => <TabContainer key={id} id={id}/>)}
        </ul>
    )
}

export default Tabs;