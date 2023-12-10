import Products from '@/pages/Products';

const ProductsPage = ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	// console.log(searchParams, '>>> query search');

	return <Products search={searchParams?.search as string} />;
};

export default ProductsPage;
