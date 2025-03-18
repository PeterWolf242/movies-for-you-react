import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />} >
				<Route path="home" element={<Home />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
			<h1>Movies for you</h1>
			<Home />
		</>
	)
}

export default App
