import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// actual value of logged in User
export const CategoriesContext = createContext({
	categoriesMap: {},
	setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const value = { categoriesMap  };
	useEffect(() => {
		const getCategoriesMap = async () => {
			
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
			setCategoriesMap(categoryMap)
		};
		getCategoriesMap()
	}, []);
	
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
