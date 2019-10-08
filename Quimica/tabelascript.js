$(document).ready(function(){
			$('div.periodo').each(function(){
				$(this).hover(
					() => $('div.elemento:nth-child('+$(this).attr('data')+')').addClass('grupoHover'),
					() => $('div.elemento:nth-child('+$(this).attr('data')+')').removeClass('grupoHover')
				)

			})

			$('.periodo:nth-child(6)').hover(
				() => $('div.elemento:nth-child(9)').addClass('grupoHover'),
				() => $('div.elemento:nth-child(9)').removeClass('grupoHover')
			)
			$('.periodo:nth-child(7)').hover(
				() => $('div.elemento:nth-child(10)').addClass('grupoHover'),
				() => $('div.elemento:nth-child(10)').removeClass('grupoHover')
			)

			$('.lantanideos>.numcoluna3').parent().hover(
					() => $('div.elemento:nth-child(9)').addClass('grupoHover'),
					() => $('div.elemento:nth-child(9)').removeClass('grupoHover')
			)
			$('.actinidios>.numcoluna3').parent().hover(
					() => $('div.elemento:nth-child(10)').addClass('grupoHover'),
					() => $('div.elemento:nth-child(10)').removeClass('grupoHover')
			)
			//Gera as telas pop-up de cada elemento

			$('.elemento').each(function(){

				$(this).click(function(){
					//Ignora os dois elementos que indicam lantanídeos e actinídeos
			
					if (($(this).attr('data')) != 0){
						$('div.infoelemento').css("display", "block")
						$('body>:not(.infoelemento)').css("filter", "blur(3px)") //Deixa o fundo embaçado


						window.addEventListener('mouseup', function(event){ //Ao clicar em qualquer lugar, remove o blur e o pop-up
						$('body>:not(.infoelemento)').css("filter", "none")
						$('div.infoelemento').css("display", "none")
						})

						var $numeroatm = $('.numero', this).text()
						var $numeromassa = $('.massa', this).text()
						var $simbolo = $('.simbolo', this).text()
						var $nome = $('.nome', this).text()
						var $densidade = $('.densidade', this).text()
						var $eletronegatividade = $('.eletronegatividade', this).text()
						var $raio = $('.raio', this).text()
						var $ano = $('.ano', this).text()
						var $fusao = $('.fusao', this).text()
						var $ebulicao = $('.ebulicao', this).text()
						var $eletronica = $('.eletronica', this).text()
						var $camadaeletrons = $('.camadaeletrons', this).text()

						var cor = $(this).css("background-color")
						$('.titulo-info').html($nome)
						$('.titulo-info').css("background-color", cor)
						$('.numeroatm-info').html($numeroatm)
						$('.numeromassa-info').html($numeromassa)
						$('.densidade-info').html($densidade)
						$('.eletronegatividade-info').html($eletronegatividade)
						$('.raio-info').html($raio)
						$('.ano-info').html($ano)
						$('.fusao-info').html($fusao)
						$('.ebulicao-info').html($ebulicao)
						$('.eletronica-info').html($eletronica)

						$('.camadaeletrons-info').html($camadaeletrons)
						if ($numeroatm >= 100){
							document.getElementById('imagem-info').src = 'fotos_elementos/naocadastrado.jpg'
						}
						else {
							document.getElementById('imagem-info').src = 'fotos_elementos/'+$simbolo + '.jpg'
						}
						document.getElementById('atom-image-info').src = 'atomo_elementos/'+$simbolo + '.png'

					}


				})
			})

		})
