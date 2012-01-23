function (doc){
	if(doc.types == "Family"){
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