import { useSelector } from "react-redux";
import { selectSectionsIds } from "../../store/modules/collections/sections/selectors";
import Tabs from "../../components/Tabs/Tabs";

const TabsContainer = () => {
    console.log("RENDER = CONTAINER = TABS");
    const sectionIds = useSelector(selectSectionsIds);

    return (
        <Tabs sectionIds={sectionIds}/>
    )
}

export default TabsContainer;