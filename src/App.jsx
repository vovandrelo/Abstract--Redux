import { Provider } from "react-redux"
import ShopPage from "./pages/Shop/ShopPage";
import { store } from "./store";

const App = () => {
	return (
		<Provider store={store}>
			{/* <BrowserRouter> */}
				{/*  <Routes> */}
					{/* <Route path="/shop" element={<ShopPage />} /> */}
					<ShopPage/>
					{/* </Route> */}
				{/* </Routes> */}
			{/* </BrowserRouter> */}
		</Provider>
	)
}

export default App;