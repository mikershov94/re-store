class BookstoreService {
	constructor() {
		this.data = [
			{
				id: 1,
				title: 'Hobbit',
				author: 'John R.R. Tolkien',
				price: 32,
				coverImage: 'https://www.bookclub.ua/images/db/goods/47865_76660.jpg',
			},
			{
				id: 2,
				title: 'Harry Potter',
				author: 'Joahn K. Rouling',
				price: 56,
				coverImage: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/1/7e80a5aee097c3879d7cb2c9c46e13.jpg',
			}
		];
	}

	getBooks() {
		return new Promise((resolve) => {  //возвращаем экземпляр класса Promise
			setTimeout(() => {	//который вызывает функцию setTimeout
				resolve(this.data)	//она в свою очередь вызывает переданный resolve
			}, 700);								//через 700 мс
		});
	}

};

export default BookstoreService;