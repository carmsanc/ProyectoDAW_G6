
function loadNews() {
	$.getJSON('data/startupdataInver.json', function(results){
		var targeta = results
		for (var idx = 0; idx < results.length; idx++){
			targeta = results[idx];
			console.log(target.Titulo)

		var h4 = $('<h4></h4>')
		h4.text(targeta.Titulo)

		var h5 = $('<h5></h5>')
		p.text(targeta.subTit)

		var h6 = $('<h6></h6>')
		p.text(targeta.Monto)

		var p = $('<p></p>')
		p.text(targeta.Descripcion)

		var img = $('<img></img>')
		img.attr({ "src:"+targeta.foto})

		var div1 = $('<div></div>')
		div1.attr({
			"class": 'modal',
			'id'="quickview", 'tabindex'="-1", 'role'="dialog", 'aria-labelledby'="quickview", 'aria-hidden'="true"
		});

		var div2 = $('<div></div>')
		div2.attr({
			"class": 'modal-dialog modal-lg modal-dialog-centered',
			"role"='document'
		});

		var div3 = $('<div></div>')
		div3.attr({
			"class": 'modal-content'
		});

		var butto = $('<button></button>')
		div3.attr({
			"class": 'close btn',
			"type": 'button',
			"data-dismiss":'modal',
			"ariana-label"='Close'
		});

		var div4 = $('<div></div>')
		div4.attr({
			"class": 'modal-body'
		});

		var div5 = $('<div></div>')
		div5.attr({
			"class": 'quickview_body'
		});

		var div6 = $('<div></div>')
		div6.attr({
			"class": 'container'
		});

		var div7 = $('<div></div>')
		div7.attr({
			"class": 'row'
		});

		var div8 = $('<div></div>')
		div8.attr({
			"class": 'col-12 col-lg-5'
		});

		var div9 = $('<div></div>')
		div9.attr({
			"class": 'quickview_pro_img'
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
