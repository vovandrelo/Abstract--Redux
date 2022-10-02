import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSections } from "../../store/modules/collections/sections/actions";
import { selectSectionsLoadingStatus } from "../../store/modules/collections/sections/selectors";
import { selectSectionsIds } from "../../store/modules/collections/sections/selectors";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import Shop from "../../components/Shop/Shop";
import Notify from "../../components/Notify/Notify";

const ShopContainer = () => {
    console.log("RENDER = CONTAINER = SHOP");
    const sectionsIds = useSelector(selectSectionsIds);
    const loadingStatus = useSelector(selectSectionsLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSections())
    }, [])


    if (loadingStatus === LOADING_STATUSES.notStarted) {
        return <Notify message={"Загрузка вот-вот начнётся!"}/>
    } else if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Notify message={"Загрузка..."}/>
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return <Notify message={"Что-то сильно пошло не так..."}/>
    }

    return(
        <>
            {!sectionsIds || sectionsIds.length === 0 ? null : <Shop/>}
        </>
    )
}

export default ShopContainer;