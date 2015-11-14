$(document).ready(function () {
	$(".cl1").addClass("animated pulse");
	$(".choice_bludo").hide();
	$(".garnir").hide();
	$(".button").click ( function () {
		// alert($(this).text());
		if($(this).parent().find(".count").val() > 0 ) {
			$(this).parent().parent().parent().children(".bludo").children(".title_bludo").children(".choice_bludo").slideDown("slow");
			// $(".choice_bludo").slideDown("slow");
		}
		else {
			$(".choice_bludo").slideUp("slow");	
		}
	});

	$(".check_bludo").click (function () {
		$(this).siblings().attr("checked", false);
	});
});

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
	});
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
	if (flag == false) return false;
}
