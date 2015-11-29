$(document).ready(function () {
	$(".title").addClass("animated pulse");
	$(".choice_bludo").hide();
	$(".garnir").hide();
	//$(".show_bludo").hide();
var page_h, page_w;
if ($("html").width() < 533) {
	$(".visible_bludo").hide();
	$(".type_bludo").click (function () {
		$(this).next(".visible_bludo").toggle();
	})
}
function window_resize(){
page_h = $("html").height();
page_w = $("html").width();
if (page_w < 533) {
		$(".visible_bludo").hide();
	}
else{
		$(".visible_bludo").show();	
	}
	console.log('qwerty');
}

$(window).resize(function(){
	window_resize();

});
	

console.log(page_h);
console.log(page_w);

	function showBludo (object, bludo) {
		if (bludo == "salad") {console.log("salad");};
		if ( $(object).hasClass(bludo) ) {
			if($(object).parent().find(".count").val() > 0 ) {
				$("div."+bludo+"").slideDown("slow");
			}
			else {
				$("div."+bludo+"").slideUp("slow");	
			}
		}
	}

	$(".button").click ( function () {
		var obj = this;
		showBludo(obj, "salad" );
		showBludo(obj, "juice" );
		showBludo(obj, "coffee");
		showBludo(obj, "tea"   );
		showBludo(obj, "bread" );	
	})

	function animate (price) {
		$("#price_cezar").text(price);
		$("[name=price_2]").val(price);
		$("#price_cezar").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$("#price_cezar").removeClass("animated pulse");
		})
	}

	function updatePriceSalad () {
		var count = parseInt($("input[id='count_2']").val());
		var summa = 0;

		$("#summa_2").val($("input[name='price_2']").val() * count);
		$("input[id^='summa_']").each(function() {
			summa += parseInt($(this).val());
		});
		$("#all_summa").html(summa);
	}

	$(".price_salad").click (function () {
		if ( $(this).val() === "shrimp" ) {
			animate("150");
		}
		else {
			animate("100");
		}
		updatePriceSalad();
	})

	$(".check_bludo").click (function () {
		$(this).siblings().attr("checked", false);
	})
})

var count = 0;
function showGarnir (button) {
	if ( $(button).text() == "+" ) {
		count++; 
		$(".garnir").slideDown("slow");
	}
	else {
		if ( ($(button).parent().children(".count").val()) > 0 ) count--;
		if (count == 0) $(".garnir").slideUp("slow");
	}
}

//функция подсчета суммы заказа
function summOrder(id_edit, obj, price) {

var count = parseInt($("input[id='count_" + id_edit + "']").val());

console.log(id_edit);
console.log($(obj).text());

	if(count < 0 ){
		count = 0;
	}
	if ($(obj).text() == "+") {

		count++; 
	}
	else {
		if (count > 0) {
			count--; 
		}
	}
	console.log(count  + "val");
	$("input[id='count_" + id_edit + "']").val(count);
	$("#summa_" + price).val($("input[name='price_" + price + "']").val() * count);

	var summa = 0;

	$("input[id^='summa_']").each(function() {
		summa += parseInt($(this).val());
	})
	$("#all_summa").html(summa);
}

//проверка форнмы
function validate(){

var n=document.forms["form"]["name"].value;
var f=document.forms["form"]["fam"].value;
var t=document.forms["form"]["tel"].value;
var flag = true;
var reg1 = /89\d{9}/g;
var reg2 = /[А-Яа-я]/g;
var reg2 = /[А-Яа-я]/g;

    if (n.length == 0){
		document.getElementById("name").innerHTML="*данное поле обязательно для заполнения";
		flag = flag & false;
	}
	else {
		if (!reg2.test(n)){
			document.getElementById("name").innerHTML="*имя должно содержать только русские буквы";
			flag = flag & false;
		}
		else{
			document.getElementById("name").innerHTML="";
		}
	};
	if (f.length == 0){
		document.getElementById("fam").innerHTML="*данное поле обязательно для заполнения";
		//return false;
		flag = flag & false;
	}
	else {
		if (!reg2.test(f)){
			document.getElementById("fam").innerHTML="*фамилия должна содержать только русские буквы";
			flag = flag & false;
		}
		else{
			document.getElementById("fam").innerHTML="";
		}
	}
	if (t.length == 0){
		document.getElementById("tel").innerHTML="*данное поле обязательно для заполнения";
		flag = flag & false;
	}
	else {
		if (!reg1.test(t)){
			document.getElementById("tel").innerHTML="*введите телефон правильно (89*********)";
			flag = flag & false;
		}
		else{
			document.getElementById("tel").innerHTML="";
		}
	}
	if (flag == true) {
		document.location.href='order.html';
	}
	
	return false;
}
