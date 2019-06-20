var link_elements = document.querySelectorAll(":link");
var link_urls = [];
for(var i=0; i < link_elements.length; i++){
	if (link_elements[i].href in link_urls){
		continue;
	}
	else {
	link_urls.push (link_elements[i].href);
	}
}
var link_pdfs = link_urls.filter(function(lu) {return lu.indexOf(".pdf")!= -1});
for(var i=0; i < link_pdfs.length; i++){
	console.log (link_pdfs[i]);
}