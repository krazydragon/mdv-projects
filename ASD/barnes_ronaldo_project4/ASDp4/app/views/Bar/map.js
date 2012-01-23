function (doc){
	if(doc.types == "Bar"){
		emit(doc._id,{
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