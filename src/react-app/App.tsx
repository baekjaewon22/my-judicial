import { Route, Routes } from "react-router-dom";
import PlatformHome from "./pages/PlatformHome";
import JudicialSite from "./pages/JudicialSite";
import NotFound from "./pages/NotFound";
import { judicial1 } from "./sites/judicial1";

function App() {
	return (
		<Routes>
			<Route path="/" element={<PlatformHome />} />
			<Route path="/judicial1" element={<JudicialSite data={judicial1} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
