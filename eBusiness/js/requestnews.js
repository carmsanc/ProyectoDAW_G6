
function loadNews() {
	$.getJSON('data/news.json', function(results){
		var noticias = results
		for (var idx = 0; idx < results.length; idx++){
			noticia = results[idx];
			console.log(noticia.Titulo)

		var h4 = $('<h4></h4>')
		h4.text(noticia.Titulo)

		var p = $('<p></p>')
		p.text(noticia.Descripcion)
		
		var div1 = $('<div></div>')
		div1.attr({
			"class": 'col-md-12 col-sm-12 col-xs-12'
		});

		var div2 = $('<div></div>')
		div2.attr({
			"class": 'single-blog'
		});

		var div3 = $('<div></div>')
		div3.attr({
			"class": 'single-blog-img'
		});

		var div4 = $('<div></div>')
		div4.attr({
			"class": 'blog-text'
		});

		

		var span = $('<span></span>')
		var a2 = $('<a></a>')
		a2.attr({
			"class": 'ready-btn',
			"href": noticia.url,
			"target": '_blank'
		});
		a2.text('Leer más')
		span.append(a2)

		div4.append(h4)
		div4.append(p)
		div4.append(span)
		var a = $('<a></a>')
		a.attr({
			
			"href": noticia.url,
			"target": '_blank'
		});

		var img = $('<img></img>')
		img.attr({
			"alt": ' ',
			"src": noticia.Img
		});

		div3.append(img)
		div2.append(div3)
		div2.append(div4)
		div1.append(div2)
		$('#newsfeed').append(div1)

	}
		
	});

}

document.addEventListener('DOMContentLoaded', function() {
    loadNews()
})
