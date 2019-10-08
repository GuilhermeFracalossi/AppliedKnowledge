var $beingCalculated = ""
var $parenteses = 0 //To know if it needs '(' or ')
var $result = ""
var $numberBetweenParentheses
var $root
var $answer
var $power10
var $power
var $numberToPower

 function scientificOrStandart(){
   $('#option2').click(function(){
     $(this).parent().addClass('active')
     $('#option1').parent().removeClass('active')
     $('.bloco1').css('display', 'block')
     $('.calc-content').css('width', '870px')
     $('#visor').css('width', '800px')
     $('.calc-head').css('width', '860px')
   })
   $('#option1').click(function(){
     $(this).parent().addClass('active')
     $('#option2').parent().removeClass('active')
     $('.bloco1').css('display', 'none')
     $('.calc-content').css('width', '490px')
     $('#visor').css('width', '430px')
     $('.calc-head').css('width', '480px')
   })
 }
function calculateOnEnter(){
  $('#visor').keypress(function() { //Show result when press 'ENTER'
    if (event.keyCode == 13) {
      showResult()
    }
  })
}
function hiddenZeroOnClick(){
  $('#visor').click(function(){
    $beingCalculated = ''
    $('#visor').html($beingCalculated)
  })
}
function putOnVisor(mathElement) {
  if($('#visor').html().charAt($('#visor').html().length-7) == 'y'){
    $beingCalculated = $('#visor').html().substring(0,$('#visor').html().search('y'))
 }
  if($.contains(document.getElementById('visor'), document.getElementsByTagName('SUP')[0])){
    if(!$.isNumeric(mathElement)){
      $beingCalculated+='</sup>'
    }
  }

  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }

  $beingCalculated += mathElement
  $('#visor').html($beingCalculated)

}

function allClean() {
  $parenteses = 0
  $beingCalculated = '0'
  $('#visor').html($beingCalculated)
}

function parenteses() {
  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }
  $parenteses++
  if ($parenteses % 2 == 1) {
    $beingCalculated += "("
    $('#visor').html($beingCalculated)
  } else {
    $beingCalculated += ")"
    $('#visor').html($beingCalculated)
  }
}
function lastParentheses() { //Put the last parentheses automatically
  if ($('#visor').html().search("\\)") == -1 && $('#visor').html().search("\\(") != -1) {
    $beingCalculated += ")"
    $('#visor').html($beingCalculated)
  }
}

function multiplyWhereMissing(mathElement){
  for (let i = 0; i< $('#visor').html().length; i++){
    if ($('#visor').html().charAt(i) == mathElement){
      if(!checkForOperators(i)){
        var withMultiply = $('#visor').html().substring(0, i)+ '*'+$('#visor').html().substring(i, $('#visor').html().length)
        $('#visor').html(withMultiply)
      }
    }
  }
}
function checkForOperators($position){
    if($('#visor').html().charAt($position - 1) == '+' ||
      $('#visor').html().charAt($position - 1) == '-' ||
      $('#visor').html().charAt($position - 1) == '*' ||
      $('#visor').html().charAt($position - 1) == '/' ||
      $('#visor').html().charAt($position - 1) == '('||
      $('#visor').html().charAt($position - 1) == '√' || $position == 0){
      return true
    }
    return false
}

function rootCalculate() {
  $root = $('#visor').html()
    .substring($('#visor').html().search("√") + 2, $('#visor').html().search("\\)"))

  $beingCalculated = $('#visor').html().replace("√(" + $root + ")", Math.sqrt($root))
  $('#visor').html($beingCalculated)

}
function triangleRelationCalculate() {

  if ($('#visor').html().search('sin') > -1) {
    var $sin = $('#visor').html().substring($('#visor').html().search("sin") + 4, $('#visor').html().search("\\)"))

    $beingCalculated = $('#visor').html().replace("sin(" + $sin + ")", Math.sin($sin))
    $('#visor').html($beingCalculated)
  }
  if ($('#visor').html().search('cos') > -1) {
    var $cos = $('#visor').html().substring($('#visor').html().search("cos") + 4, $('#visor').html().search("\\)"))

    $beingCalculated = $('#visor').html().replace("cos(" + $cos + ")", Math.cos($cos))
    $('#visor').html($beingCalculated)
  }
  if ($('#visor').html().search('tan') > -1) {
    var $tan = $('#visor').html().substring($('#visor').html().search("tan") + 4, $('#visor').html().search("\\)"))

    $beingCalculated = $('#visor').html().replace("tan(" + $tan + ")", Math.tan($tan))
    $('#visor').html($beingCalculated)
  }
}

function logarithmCalculate() {
  $log = $('#visor').html().substring($('#visor').html().search("log") + 4, $('#visor').html().search("\\)"))
  $beingCalculated = $('#visor').html().replace("log(" + $log + ")", Math.log10($log))
  $('#visor').html($beingCalculated)
}

function factorial(){
  if ($('#visor').html() == '0'){
    $beingCalculated = '0!'
    $('#visor').html($beingCalculated)
  }
  else{
    $beingCalculated += '!'
    $('#visor').html($beingCalculated)
  }
}
function factorialCalculate() {
  let $lastPosition = $('#visor').html().search('!') - 1
  let $firstPosition = $lastPosition
  let $numberToFactorial
  let $factorial = 1
while ($lastPosition > -1 && $('#visor').html().charAt($lastPosition) != '+' &&
  $('#visor').html().charAt($lastPosition) != '-' &&
  $('#visor').html().charAt($lastPosition) != '*' &&
  $('#visor').html().charAt($lastPosition) != '/' &&
  $('#visor').html().charAt($lastPosition) != '√' &&
  $('#visor').html().charAt($lastPosition) != 'n' &&
  $('#visor').html().charAt($lastPosition) != 's'

) {
  $lastPosition--
  $firstPosition = $lastPosition
  }
  $numberToFactorial = $('#visor').html().substring($firstPosition + 1, $('#visor').html().search('!'))

  for (var i = 1; i <= $numberToFactorial; i++) {
    $factorial *= i
  }
  $beingCalculated = $('#visor').html().replace($numberToFactorial + "!", $factorial)
  $('#visor').html($beingCalculated)

}
function backspace() {
  $beingCalculated = $('#visor').html().substring(0, $('#visor').html().length - 1)
  $('#visor').html($beingCalculated)
}
function plusOrMinus() {
  if ($('#visor').html().charAt(0) == '-') {
    $beingCalculated = $('#visor').html().substring(1, $('#visor').html().lenght)
  } else {
    $beingCalculated = '-' + $('#visor').html()
  }

  $('#visor').html($beingCalculated)
}
function root() {
  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }
  $parenteses++
  $beingCalculated += '√('
  $('#visor').html($beingCalculated)
}
function triangleRelation(sinCosTan) {
  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }
  $parenteses++
  $beingCalculated += sinCosTan +'('
  $('#visor').html($beingCalculated)
}
function logarithm() {
  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }
  $parenteses++
  $beingCalculated += 'log('
  $('#visor').html($beingCalculated)
}

function powerOfTen() {
  if ($('#visor').html() == '0') {
           $beingCalculated = ""
            $('#visor').html($beingCalculated)
         }

  if(checkForOperators($('#visor').html().length)){
    $beingCalculated += "10<sup>"
  }else{
    $beingCalculated += "*10<sup>"
  }
  $('#visor').html($beingCalculated)
}
function powerOfTenCalculate() {
  var $firstPosition = $('#visor').html().search('10<sup>')
  var $lastPosition = $('#visor').html().search('</sup>')
  if ($firstPosition > -1) {
    $power10 = $('#visor').html().substring($firstPosition + 7, $lastPosition)
  }
}

function power(){
  if ($('#visor').html() == '0'){
    $beingCalculated = '0<sup>y'
    $('#visor').html($beingCalculated)
  }else{
    $beingCalculated+='<sup>y'
  }
  $('#visor').html($beingCalculated)
}
function powerCalculate(){
    var $lastPosition = $('#visor').html().search('</sup>')
    let $firstPosition =  $('#visor').html().search('<sup>')

    $power = $('#visor').html().substring($firstPosition + 5, $lastPosition)

    var $firstPositionBase = $firstPosition-1
    while ($.isNumeric($('#visor').html().charAt($firstPositionBase)) && $firstPositionBase>-1){
      $firstPositionBase--

    }
    $numberToPower = $('#visor').html().substring($firstPositionBase+1, $firstPosition)
}
 function allReplaces(){
  $result = $('#visor').html().replace(/\π/g, Math.PI)
  .replace(/e/g, Math.E)
  .replace(/\%/g, "\/100")
  .replace(/Ans/g, $answer)
  .replace('10<sup>'+$power10+'</sup>', Math.pow(10, $power10)) //Need all occurances
  .replace($numberToPower+'<sup>'+$power+'</sup>', Math.pow($numberToPower, $power))
}

function showResult() {
  $result = $('#visor').html()
  lastParentheses()
  rootCalculate()
  triangleRelationCalculate()
  logarithmCalculate()
  factorialCalculate()
  powerOfTenCalculate()
  powerCalculate()

  $result = multiplyWhereMissing('π')
  $result = multiplyWhereMissing('e')
  $result = multiplyWhereMissing('(')
  $result = multiplyWhereMissing('√')

  allReplaces()

try {
    $result = eval($result)
    $beingCalculated = $result
    $answer = $result
    $('#visor').html($result)
} catch (e) {
    $('#visor').html('Syntax Error')
}

}

$(function(){
  $('#visor').html('0')
  calculateOnEnter()
  hiddenZeroOnClick()
  scientificOrStandart()

})

// ---------------------FIM CALCULADORA---------------------

$(document).ready(function() {
  var $a
  var $b
  var $c
  $('#secondDegreeA').keyup(function() {
    $a = $(this).html()
    calculateSecondDegree()
  })
  $('#secondDegreeB').keyup(function() {

    $b = $(this).html()
    calculateSecondDegree()
  })
  $('#secondDegreeC').keyup(function() {
    $c = $(this).html()
    calculateSecondDegree()
  })

  $('.variables').click(function(){
    $(this).html('')
  })
  function calculateSecondDegree() {
    if ($('#secondDegreeA').html() != 'a' && $('#secondDegreeB').html() != 'b' && $('#secondDegreeC').html() != 'c') {
      $a = parseInt($a)
      $b = parseInt($b)
      $c = parseInt($c)
      if ($.isNumeric($a + $b + $c)) {
        if ($b * $b - 4 * $a * $c >= 0) {

          var $resultX1 = (-$b + Math.sqrt($b * $b - 4 * $a * $c)) / 2 * $a
          var $resultX2 = (-$b - Math.sqrt($b * $b - 4 * $a * $c)) / 2 * $a

          if($resultX1 == $resultX2){
            $('#secondDegreeResult1').html($resultX1)
            $('#secondDegreeResult2').html('Apenas uma raiz')
          }else {
            $('#secondDegreeResult1').html($resultX1)
            $('#secondDegreeResult2').html($resultX2)
          }


        } else {
          $('#secondDegreeResult1').html('Delta negativo!')
          $('#secondDegreeResult2').html('Delta negativo!')
        }

      } else {
        $('#secondDegreeResult1').html('Informe Números!')
        $('#secondDegreeResult2').html('Informe Números!')
      }

    }

  }
})
