import CardCustom from './CardCustom';
import { ObjectId } from 'mongodb';

export interface ProductDummy {
	_id: string;
	name: string;
	slug: string;
	description: string;
	excerpt: string;
	price: number;
	tags: string[];
	thumbnail: string;
	images: string[];
}

const CardList = () => {
	const products: ProductDummy[] = [
		{
			_id: '657640f50ebff625cfb6a2e5',
			name: 'cunabula caelestis volaticus',
			slug: 'suspendo-tenetur',
			description:
				'Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.',
			excerpt: 'Thorax saepe deficio adimpleo conitor.',
			price: 5249399,
			tags: ['trucido', 'talio', 'arceo'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=0',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail01',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail02',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail03',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail04',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail05',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2e6',
			name: 'vaco decet',
			slug: 'umquam-defendo-vorax',
			description:
				'Avarus theatrum deserunt cavus ultio. Quae curatio abeo. Distinctio apud desino adhuc trado.\nAspernatur aestas comes modi. Asper caput rerum absque alii molestiae vestrum usitas sodalitas. Assentator calculus illo.\nMaxime tot depraedor textus auctus. Acidus crapula quae verumtamen delicate absum vulgo alioqui votum sonitus. Voro utor maxime tamquam repudiandae creptio atrocitas crebro.',
			excerpt: 'Absorbeo sursum tres excepturi cupiditas altus.',
			price: 7675600,
			tags: ['cimentarius', 'adaugeo', 'vacuus'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=1',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail11',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail12',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail13',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail14',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail15',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2e7',
			name: 'capitulus conventus',
			slug: 'omnis-arbor-tego',
			description:
				'Theologus vindico supplanto. Sed vix verto vulgus xiphias. Civitas dolore angelus patruus comptus attero.\nConfido deputo quos vitiosus sustineo taceo perspiciatis cuius decumbo argentum. Vinum aestivus hic. Catena velit venustas avaritia.\nAduro tabgo tabula iste sophismata delinquo demonstro amor quasi. Vulgivagus beneficium necessitatibus super tredecim. Sunt cui calculus nemo adamo contigo comptus talio.',
			excerpt: 'Cruciamentum contabesco subito aggero.',
			price: 3768019,
			tags: ['conforto', 'vobis', 'rerum'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=2',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail21',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail22',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail23',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail24',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail25',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2e8',
			name: 'capillus mollitia',
			slug: 'voro-cupio-corroboro',
			description:
				'Provident deinde corona amplitudo summisse cur avaritia. Amita cunctatio alii victus cruentus. Adstringo comparo adstringo solutio sufficio adnuo rem trado curis comes.\nAeneus aggredior illo apto voluntarius spoliatio ratione certus amet. Uberrime consequuntur calco stella sum supellex utique. Creta deleniti animus amplexus.',
			excerpt: 'Voluptate tricesimus denego currus.',
			price: 3225477,
			tags: ['copia', 'sursum', 'omnis'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=3',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail31',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail32',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail33',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail34',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail35',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2e9',
			name: 'aranea illum cubitum',
			slug: 'vinum-astrum',
			description:
				'Aliquam sol aurum solio. Totam itaque audax cernuus trans spero conforto aut. Conturbo uterque coerceo quae defendo sortitus.\nCustodia baiulus urbanus uredo cernuus vulariter defero teres. Ago vulgaris sperno concido quidem usus ustulo. Denuo comminor temptatio.\nVelut valeo casus. Supra at coniecto ultio vigor vulticulus. Cognatus culpa ventosus curtus arma cunae tamquam advenio candidus facere.',
			excerpt: 'Cultellus defessus teres depopulo aperio.',
			price: 7706552,
			tags: ['timor', 'tantum', 'desipio'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=4',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail41',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail42',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail43',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail44',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail45',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2ea',
			name: 'terga voluptates',
			slug: 'in-usitas',
			description:
				'Occaecati vaco ago verus credo alo vir commemoro. Thymum cupressus repellat vir compono soleo stella alveus. Repudiandae torrens clementia quis alius carbo.\nVoco tergum sint comedo aequitas ademptio conservo. Vivo concido crebro consequuntur aestas pax coruscus usitas truculenter. Adversus certe cunctatio avarus tot ubi vae viduo.',
			excerpt: 'Paens magnam ars apparatus.',
			price: 6961261,
			tags: ['aegrus', 'utpote', 'cado'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=5',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail51',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail52',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail53',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail54',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail55',
			],
		},
		{
			_id: '657640f50ebff625cfb6a2eb',
			name: 'perferendis talus',
			slug: 'unus-articulus',
			description:
				'Talus coma casso aufero aeternus tibi territo. Comminor caecus ipsam ut tubineus capillus tego sub. Consequatur deripio tollo angelus astrum abundans nihil varius sophismata.\nTemperantia decet comptus compello valeo patior uberrime. Paens canto vigor communis deserunt adstringo cohors conqueror tracto recusandae. Crebro corpus culpo tantum vestrum.\nUniverse clamo patria color. Rerum aiunt derelinquo pauper titulus cultellus uredo crapula. Cohors qui demonstro error despecto cerno tolero.',
			excerpt: 'Arguo talio valde vicinus tenus.',
			price: 7410934,
			tags: ['spectaculum', 'adipisci', 'trucido'],
			thumbnail: 'https://source.unsplash.com/random/1000x1000/?product&seed=6',
			images: [
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail61',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail62',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail63',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail64',
				'https://source.unsplash.com/random/1000x1000/?product&seed=productDetail65',
			],
		},
	];

	return (
		<div className="flex flex-col w-full min-h-screen bg-zinc-950 px-16 py-8 gap-20">
			<div className="grid grid-cols-3 gap-4 ">
				<div className="col-span-1 w-full h-[70vh]">
					<CardCustom data={products[0]} />
				</div>
				<div className="col-span-2 w-full h-[70vh]">
					<CardCustom data={products[1]} />
				</div>
				<div className="col-span-2 w-full h-[70vh]">
					<CardCustom
						data={products[2]}
						position={'justify-between bg-gradient-to-b'}
					/>
				</div>
				<div className="col-span-1 w-full h-[70vh]">
					<CardCustom
						data={products[3]}
						position={'justify-between bg-gradient-to-b'}
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 h-screen gap-4 py-6">
				<div className="w-full">
					<CardCustom data={products[4]} />
				</div>
				<div className="w-full">
					<CardCustom data={products[5]} />
				</div>
				{/* <div className="w-full">
					<CardCustom data={products[0]} />
				</div> */}
			</div>

			<div className="w-full h-[80vh] ">
				<div className="w-full h-full">
					<CardCustom data={products[6]} position={'center'} />
				</div>
			</div>
		</div>
	);
};

export default CardList;
