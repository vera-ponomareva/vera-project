({
    block: 'page',
    title: 'My search page',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content: [
        {
            block: 'head',
            content: {
	    	block: 'layout',
		content: [
			{
			elem: 'left',
			content: {
				block: 'b-search',
				attrs: { action: '/search.xml'},
				input: {
					elem: 'input',
					attrs: { placeholder: 'Find' }
				},
				button: {
					elem: 'button'
				}
				} 
			}, 
		{
			elem: 'right',
			content: {
				block: 'b-logo',
				content: {
					elem: 'link',
					url: 'http://bem.info',
					content: [
					{
					elem: 'icon',
					url: 'http://www.divshare.com/img/24781927-4a8.png'
					},
					{
					elem: 'slogan',
					content: 'Find your bike!'
					}]
				}
			} 
			
		}		
		 
		]} 
	},
	 {
	 block: 'goods',
	 goods: [
	 {
	 title: 'Bicyclist mittens',
	 image: 'http://s2.hostingkartinok.com/uploads/thumbs/2013/02/a8da1138e373b536bf19792cd17d6132.png',
	 price: '500 RUR',
	 url: '/'
	 },
	 {
	 title: 'Circular bike',
	 image: 'http://www.divshare.com/img/24783485-0c5.png',
	 price: '7300 RUR',
	 url: '/'
	 },
	 {
	 title: '7-person tricycle',
	 image: 'http://www.divshare.com/img/24783490-a55.png',
	 price: '15200 RUR',
	 url: '/'
	 },
	 {
	 title: 'A giant bike',
	 image: 'http://www.divshare.com/img/24783496-df8.png',
	 price: '69000 RUR',
	 url: '/',
	 new: true
	 },
	 {
	 title: 'Utility bike',
	 image: 'http://www.divshare.com/img/24783501-55f.png',
	 price: '18000 RUR',
	 url: '/'
	 }
	 ]
	 }
	
	]
             
})
