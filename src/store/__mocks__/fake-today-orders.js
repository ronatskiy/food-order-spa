const TODAY_ORDERS = {
	weekDays: [
		{
			weekDay: "Friday",
			userName: "Roman Onatsky",
			suppliers: [
				{
					supplierId: 1,
					supplierName: "Столовая №1",
					categories: [
						{
							id: 7,
							name: "ГАРНИРЫ",
							dishes: [
								{
									id: 2,
									name: "Картофельное вареный15",
									price: 15.0,
									negativeRewievs: 0,
									positiveRewievs: 0,
									weekDay: null,
								},
								{
									id: 51,
									name: "Лазанья38",
									price: 38.0,
									negativeRewievs: 0,
									positiveRewievs: 0,
									weekDay: null,
								},
							],
						},
						{
							id: 6,
							name: "МЯСНОЕ",
							dishes: [
								{
									id: 6,
									name: '"Бризоль" свинина рубленая в яйце22',
									price: 22.0,
									negativeRewievs: 0,
									positiveRewievs: 0,
									weekDay: null,
								},
							],
						},
					],
				},
			],
		},
		{
			weekDay: "Friday",
			userName: "Ivan Petrov",
			suppliers: [
				{
					supplierId: 2,
					supplierName: "ГлаголЪ",
					categories: [
						{
							id: 2,
							name: "Вторые блюда",
							dishes: [
								{
									id: 72,
									name: "Спагетти + тефтеля",
									price: 0.0,
									negativeRewievs: 0,
									positiveRewievs: 0,
									weekDay: null,
								},
							],
						},
						{
							id: 1,
							name: "Первые блюда",
							dishes: [
								{
									id: 78,
									name: "Борщ",
									price: 0.0,
									negativeRewievs: 0,
									positiveRewievs: 0,
									weekDay: null,
								},
							],
						},
					],
				},
			],
		},
	],
};

export default TODAY_ORDERS;
