function (doc){
	if(doc._id.substr(0,10) === "Restaurant"){
		emit(doc._id.substr(10),{
			"place": doc.place,
			"restaurant": doc.restaurant,
			"date": doc.date,
			"types": doc.types,
			"food": doc.food,
			"numScale": doc.numScale,
			"comments": doc.comments
		});
	}
};