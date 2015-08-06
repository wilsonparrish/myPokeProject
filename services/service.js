app.service('pokeService', function($http, $q){

	this.getPokemon = function(num){	
		var def = $q.defer();
		var url = 'http://pokeapi.co/api/v1/pokemon/' + num
		$http({
			method: 'GET',
			url: url
		}).then(function(response){
			var tempMon = {};
			var results = response.data;
			console.log(results);
		
			tempMon.pokemon = results.name;
			tempMon.id = results.pkdx_id;
			tempMon.hp = results.hp;
			tempMon.atk = results.attack;
			tempMon.def = results.defense;
			tempMon.spatk = results.sp_atk;
			tempMon.spdef = results.sp_def;
			tempMon.spd = results.speed;
			tempMon.types = [];
			for(var i = 0; i < results.types.length; i++){
				tempMon.types.push(results.types[i].name);
			}
			var urlSprite = 'http://pokeapi.co' + results.sprites[0].resource_uri;
			$http({
				method: 'GET',
				url: urlSprite
			}).then(function(response){
				var imageResult = response.data;
				tempMon.sprite = 'http://pokeapi.co' + imageResult.image;
				// console.log(response);
			})
			var urlDescrip = 'http://pokeapi.co' + results.descriptions[0].resource_uri;
			$http({
				method: 'GET',
				url: urlDescrip
			}).then(function(response){
				var desResult = response.data.description;
				tempMon.descrip = desResult;
				// console.log(desResult);
			})

			def.resolve(tempMon);
			console.log(tempMon);
		})
		return def.promise;
	};

});