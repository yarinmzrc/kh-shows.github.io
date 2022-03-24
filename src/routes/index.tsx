import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';
import { Search } from '../components/Search/Search';
import { HomePage } from '../pages/HomePage/HomePage';
import { ShowPage } from '../pages/ShowPage/ShowPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';

const AppRoutes = () => {
	return (
		<div>
			<BrowserRouter>
            <Nav />
			<Search />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:search" element={<SearchPage />} />
					<Route path="/show/:show" element={<ShowPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRoutes;