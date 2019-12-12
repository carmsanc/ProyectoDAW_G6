$(document).ready(function() {
            $(".button").click(function(){
                    var nombre = $('.searchinput').val();
					$('#newsfeed').empty();
					
					if(nombre.toLowerCase() == 'feria'){
                        let elemento = $('<li class = "text-center"> <a href="agua.html" >agua</a> </li>')
                        $(".combo_productos").append(elemento);
                    }
                    if ((nombre.toLowerCase() == 'bebida') || (nombre.toLowerCase() == 'bebidas') ){
                        let elementoB = $('<li class = "text-center"> <a href="energizantes.html" >bebida energetica </a> </li>')
                        $(".combo_productos").append(elementoB);
                        let elementoB2 = $('<li class = "text-center"> <a href="bsaborizadas.html" > bebida saborizada </li>')
                        $(".combo_productos").append(elementoB2);

                    }
            })
})