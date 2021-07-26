import { filterCategories } from '../../utils/filters';

import { useQuery } from '@apollo/client';

import ProductList from '../../components/ProductList';
import Masthead from '../../components/Masthead';

import { QUERY_PRODUCTS } from '../../utils/queries';

function Menu() {
	document.title = 'Mozz Pizza Menu | Neopolitan Pizza Kitchen, Glengarriff, West Cork';

	const { loading, data } = useQuery(QUERY_PRODUCTS);

	const products = data?.products || [];
	const categories = [];

	products.forEach(product => {
		if (!categories.includes(product.category.name)) categories.push(product.category.name);
	});

	return (
		<>
			<Masthead title="Menu" />

			{loading ? <p>Loading...</p> : categories.map(category => {
				return (
					<ProductList key={category} category={category} products={filterCategories(products, category)} />
				);
			})}

			<small>
				<em><strong>Allergens:</strong> 1 Gluten, 2 Dairy, 3 Egg, 4 Nuts</em>
			</small>
		</>
		
	);
}

export default Menu;