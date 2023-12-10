import DetailProduct from '@/pages/DetailProduct';

const getDetailProduct = async () => {
	// const response = await
};

const DetailProductPage = ({ params }: { params: { slug: string } }) => {
	console.log(params);

	return <DetailProduct slug={params?.slug} />;
};

export default DetailProductPage;
