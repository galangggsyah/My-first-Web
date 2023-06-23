let body = document.body;

		const darkLimit = 5;
		let darkCounter = 0;
		let darkRemainingLeft;

		function darkmode() {
			if(darkRemainingLeft == 0){
				console.log('jatah dark mode anda sudah mencapai batas')
				return;
			}

			darkCounter += 1;
			darkRemainingLeft = darkLimit - darkCounter;

			console.log('dark mode diklik sebanyak: ', darkCounter);
			console.log('kesempatan anda: ', darkRemainingLeft)
			body.classList.toggle('dark');
		}
