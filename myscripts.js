$ = jQuery;

$.getJSON("/proxy.php", function(data) {

  $(".vieta").html(data.place['name']);
  
  var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var day = currentDate.getDate() - 1;
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var day2 = currentDate.getDate();
  var day3 = currentDate.getDate() + 1;
  var day4 = currentDate.getDate() + 2;
  var day5 = currentDate.getDate() + 3;
  var day6 = currentDate.getDate() + 4;
  var day7 = currentDate.getDate() + 5;

  $(".siandien").html("<b>" + day + "-" + month + "-" + year + "</b>");
  $(".diena_2").html("<b>" + day2 + "-" + month + "-" + year + "</b>");
  $(".diena_3").html("<b>" + day3 + "-" + month + "-" + year + "</b>");
  $(".diena_4").html("<b>" + day4 + "-" + month + "-" + year + "</b>");
  $(".diena_5").html("<b>" + day5 + "-" + month + "-" + year + "</b>");
  $(".diena_6").html("<b>" + day6 + "-" + month + "-" + year + "</b>");
  $(".diena_7").html("<b>" + day7 + "-" + month + "-" + year + "</b>");

  var d = new Date();
  var n = d.getHours();
  var n = d.getHours();
  n = addZeroBefore(n);
  var n1 = d.getMinutes();
  var n2 = d.getSeconds();

  var siandien = day + "-" + month + "-" + year;
  var dabar_laikas = year + '-' + month + '-' + day + ' ' + n + ':00:00';
  var dabar_temp;
  var salygos_dabar;
  var vejo_greitis_dabar;
  var vejo_kryptis;
  var debesuotumas;
  var vidutine_temp = 0;
  var vidutine_temp2 = 0;
  var vidutine_temp3 = 0;
  var vidutine_temp4 = 0;
  var vidutine_temp5 = 0;
  var vidutine_temp6 = 0;
  var vidutine_temp7 = 0;


var vidutine_temp_array = [];
var vidutine_temp_array2 = [];
var vidutine_temp_array3 = [];
var vidutine_temp_array4 = [];
var vidutine_temp_array5 = [];
var vidutine_temp_array6 = [];
var vidutine_temp_array7 = [];

var dienos_array = [];
var dienos_array2 = [];
var dienos_array3 = [];
var dienos_array4 = [];
var dienos_array5 = [];
var dienos_array6 = [];
var dienos_array7 = [];





  $.each(data.forecastTimestamps,function(index, val){

    if(
        val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day
    ){
        vidutine_temp = vidutine_temp + 1;
        vidutine_temp_array.push(val.airTemperature);
        dienos_array.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});
    }

    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day2){
      vidutine_temp2 = vidutine_temp2 + 1;
      vidutine_temp_array2.push(val.airTemperature);
      dienos_array2.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day3){
      vidutine_temp3 = vidutine_temp3 + 1;
      vidutine_temp_array3.push(val.airTemperature);
      dienos_array3.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day4){
      vidutine_temp4 = vidutine_temp4 + 1;
      vidutine_temp_array4.push(val.airTemperature);
      dienos_array4.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day5){
      vidutine_temp5 = vidutine_temp5 + 1;
      vidutine_temp_array5.push(val.airTemperature);
      dienos_array5.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day6){
      vidutine_temp6 = vidutine_temp6 + 1;
      vidutine_temp_array6.push(val.airTemperature);
      dienos_array6.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
    if(val.forecastTimeUtc.substring(10, 0) ==  year + '-' + month + '-' + day7){
      vidutine_temp7 = vidutine_temp7 + 1;
      vidutine_temp_array7.push(val.airTemperature);
      dienos_array7.push({"Laikas": val.forecastTimeUtc, "temperatura": val.airTemperature,"salygos": val.conditionCode, "vejas": val.windSpeed, "debesuotumas":val.cloudCover});

    }
   

    vidutine_temp_array_reiksme = vidutine_temp_array.reduce(getSum, 0);
    vidutine_temp_array_reiksme2 = vidutine_temp_array2.reduce(getSum, 0);
    vidutine_temp_array_reiksme3 = vidutine_temp_array3.reduce(getSum, 0);
    vidutine_temp_array_reiksme4 = vidutine_temp_array4.reduce(getSum, 0);
    vidutine_temp_array_reiksme5 = vidutine_temp_array5.reduce(getSum, 0);
    vidutine_temp_array_reiksme6 = vidutine_temp_array6.reduce(getSum, 0);
    vidutine_temp_array_reiksme7 = vidutine_temp_array7.reduce(getSum, 0);



    if(val.forecastTimeUtc == dabar_laikas){
        console.log('dabar ' + val.airTemperature);
        dabar_temp = val.airTemperature;
        salygos_dabar = val.conditionCode;
        vejo_greitis_dabar = val.windSpeed;
        vejo_kryptis = val.windDirection;
        debesuotumas = val.cloudCover;
    }

});
function getSum(total, num) {
    return total + num;
  }
 
  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }

  var html = '';
  var html2 = '';
  var html3 = '';
  var html4 = '';
  var html5 = '';
  var html6 = '';
  var html7 = '';



$.each(dienos_array,function(index, val){
  html += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";
});

$.each(dienos_array2,function(index, val){
  html2 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});
$.each(dienos_array3,function(index, val){
  html3 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});
$.each(dienos_array4,function(index, val){
  html4 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});
$.each(dienos_array5,function(index, val){
  html5 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});
$.each(dienos_array6,function(index, val){
  html6 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});
$.each(dienos_array7,function(index, val){
  html7 += "<div id=stulpelis_"+index+ " class='col-md-2 days_div'>"+val['Laikas'] + "<br>" +val['temperatura']+"<sup>o</sup>C<br>"+ "<br>Oro salygos: " +val['salygos']+""+ "<br>Vėjo greitis: " +val['vejas']+"m/s"+ "<br>Debesuotumas: " +val['debesuotumas']+"%</div>";});

$("#main").append(html);
$("#main2").append(html2);
$("#main3").append(html3);
$("#main4").append(html4);
$("#main5").append(html5);
$("#main6").append(html6);
$("#main7").append(html7);



$(".dabar_yra").html('Dabar yra: ' + dabar_temp + '<sup>o</sup>C');
$(".debesuotumas").html('Debesuotumas: ' + debesuotumas + '% <br>');
$(".vejo_greitis").html('Vėjo greitis: ' + vejo_greitis_dabar + 'm/s <br>');
$(".vejo_kryptis").html('Vėjo kryptis: ' +vejo_kryptis + '<br>');
$(".salygos_dabar").html('Oro salygos dabar: ' + salygos_dabar + '<br>');
$(".siandien_vidutine_temp").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme/vidutine_temp * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp2").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme2/vidutine_temp2 * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp3").html('Vidutinė štempetarūra: ' + Math.round(vidutine_temp_array_reiksme3/vidutine_temp3 * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp4").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme4/vidutine_temp4 * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp5").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme5/vidutine_temp5 * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp6").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme6/vidutine_temp6 * 100) / 100 + '<sup>o</sup>C<br>');
$(".siandien_vidutine_temp7").html('Vidutinė tempetarūra: ' + Math.round(vidutine_temp_array_reiksme7/vidutine_temp7 * 100) / 100 + '<sup>o</sup>C<br>');





})


$(".diena_press").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main").css("display","flex");
});
$(".diena_press2").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main2").css("display","flex");
});
$(".diena_press3").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main3").css("display","flex");
});
$(".diena_press4").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main4").css("display","flex");
});
$(".diena_press5").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main5").css("display","flex");
});
$(".diena_press6").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main6").css("display","flex");
});
$(".diena_press7").click(function () {
  $("#main").css("display","none");
  $("#main2").css("display","none");
  $("#main3").css("display","none");
  $("#main4").css("display","none");
  $("#main5").css("display","none");
  $("#main6").css("display","none");
  $("#main7").css("display","none");
  $("#main7").css("display","flex");
});