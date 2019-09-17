(function () {

	let tabNav = document.querySelectorAll('.tabs_nav_i');
	let tabContent = document.querySelectorAll('.tab');

	let body = document.body;
	body.onclick = function(event){
 		let target = event.target;
 		if (target.classList.contains('circle')){
 			name = target.id;

 			let page = document.getElementById('content1');
			page.classList.add('content1_off');

			let bg = document.getElementById('bg');
			bg.classList.add('bg_off');

			setTimeout(on_bg2, 300);

			function on_bg2() {
				let bg2 = document.getElementById('bg2');
				bg2.classList.add('bg2_on');
			}

			setTimeout(on_tabs, 800);

			function on_tabs(){
				let tabs = document.getElementById('content2');
				tabs.classList.add('content2_on');
			};

			selectTabNav(name);
		};

		if (target.classList.contains('tabs_nav_i')){
 			name = target.id;
 			selectTabNav(name);
 		};
	};

	function selectTabNav(selectId){
		selectTabContent(selectId);
		tabNav.forEach(function(item){
			if (item.id == selectId){
			 item.classList.add('active')}
			 else {item.classList.remove('active');}
		});		
	};

	function selectTabContent(tabName){
		tabContent.forEach(function(item){
			if (item.id == tabName){
			 item.classList.add('active')}
			 else {item.classList.remove('active');}
		});
	};

})();