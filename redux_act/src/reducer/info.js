const initialState = [
	{
		id:1,
		model: "Apple iPhone 8 256GB",
		cost:2519.00,
		img:'https://shop.mts.by/upload/resize_cache/iblock/10f/90_180_1/iphone8-spgray-select-2017_AV1.png'
	},
	{
		id:2,
		model: "Samsung Galaxy J7 2017 J730FM/DS ",
		cost:629.00 ,
		img:'https://shop.mts.by/upload/resize_cache/iblock/530/90_180_1/ru-galaxy-j7-2017-sm-j730fzdnser-gold-68977957.jpg'
	},
	{
		id:3,
		model: "Huawei P10  ",
		cost:999.00 ,
		img:'https://shop.mts.by/upload/resize_cache/iblock/567/90_180_1/p10%20gold.jpg'
		
	},
	{
		id:4,
		model: "Xiaomi Redmi Note 4 32GB ",
		cost:399.90 ,
		img:'https://shop.mts.by/upload/resize_cache/iblock/76f/90_180_1/Note4Gray.jpg'
	}
]


let userInfo = (state = initialState)=> state;

export default userInfo