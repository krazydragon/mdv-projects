function(doc, req) {
  var html = "<div data-role=\"page\" id=\"entryPage\">" +
                       "<div data-role=\"header\" id=\"Restaurantheader\">" +
                           "<h2 class=\"Restauranttitle\">" + doc.title + "<\/h2>" +
                       "<\/div>" +
                       "<div data-role=\"content\" id=\"albumcontent\">" +
                           "<h2 class=\"resturant\">" + obj.restaurant + "<\/h2>" +
                           "<p class=\"location\">" + doc.place + "<\/p>" +
                           "<p class=\"date\">" + doc.date + "<\/p>" +
                           "<p class=\"catagory\">" + "Type of Restaurant : " + obj.types + "<\/p>" +
                           "<p class=\"typeoffood\">" + "Kind of food served : " + obj.food+ "<\/p>" +
                           "<p class=\"scale\">" + "On a scale of 1-10 how good was it? : " + obj.numScale + "<\/p>" +
                           "<p class=\"comments\">" +"Comments : " + obj.comments + "<\/p>" +
                       "<\/div>" +
                       "<div data-role=\"footer\" \/>" +
                   "<\/div>";
  return html;
  
  