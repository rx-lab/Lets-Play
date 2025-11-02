$(document).ready(function(){

var sen = ["در تازه‌ترین اخبار اینسایدر گیمینگ می‌خوانیم که عرضه یک حالت جدید و هیجان‌انگیز برای بازی Marvel Rivals باعث افزایش چشمگیر تعداد بازیکن‌های آن در استیم نسبت به مدت اخیر شده است. این بازی شوتر آرنای چندنفره و ابرقهرمانی که به‌صورت رایگان در دسترس قرار دارد",
    "با نزدیک شدن به پایان عمر به‌روزرسانی نسخه ۴.۰ بازی پابجی موبایل، آخرین رویداد همکاری این نسخه نیز معرفی شده است. بر اساس آخرین اخبار بازی موبایل و به نقل از رسانه گیمینگ‌آن‌فون، بازی PUBG Mobile یک همکاری جدید را با بازی ترسناک و ماجراجویی Dying Light: The Beast، محصول استودیو Techland آغاز کرده است",
    "به نقل از رسانه گیمینگ‌آن‌فون، بازیکنانی که در طول دوره این کمپین وارد بازی شوند، یک آیتم Highlight: AC Milan Chance Deal به‌عنوان پاداش ورود دریافت خواهند کرد. این هدیه رایگان تا پیش از ۱۵ آبان (۶ نوامبر) از صندوق ورودی قابل دریافت است"
]
var i = 0;
$('.p2').html(sen[i]);
$('.next').click(function(){
    if(i < 2){
    i++
    $('.p2').slideUp("2000",function(){
        $(this).html(sen[i]).slideDown("1000")
    })};
    
})
$('.previous').click(function(){
    if(i > 0){
    i--
    $('.p2').slideUp("2000",function(){
        $(this).html(sen[i]).slideDown("1000");
    })};

})

var img = ["game/Blue Gaming banner.png", "game/Untitled-1.png","game/Untitled-2.png"];
var im = 0;
 $('.slider').attr("src", img[im])
$('.slidedown').click(function(){
    if(im < 2){
    im++
    $('.slider').fadeOut(300,function(){
        $('.slider').attr("src", img[im]).fadeIn("low")
    })}
})
$('.slideup').click(function(){
    if (im > 0){
    im--
    $('.slider').fadeOut(300,function(){
        $('.slider').attr('src', img[im]).fadeIn("low")
    })}
})
var counter = 0;

$('.darkmode').click(function () {
  counter++;

  if (counter === 1) {
    $('.darkmode')
      .fadeOut(400, function () {
        $('.darkmode')
          .html('<i class="bi bi-moon-stars-fill"></i>')
          .fadeIn(400)
          .css({ 'background-color': 'black', 'color': 'white' });

        $('.card').css({ 'background': 'linear-gradient(to right,#343a40,#212529)', 'color': 'white' });
        $('body').css({ 'background': '#212529' });
        $('.card2').css({ 'background': 'linear-gradient(to right,#343a40,#495057)', 'color': 'white' });
        $('.ejare').css({ 'background': 'linear-gradient(to right,#343a40,#495057)', 'color': 'white' });
        $('.footer').css({ 'background': 'linear-gradient(to right,#343a40,#495057)', 'color': 'white' });
        $('.nav').css({'background-color': 'rgb(73, 76, 79)' , 'color' : 'white'})
       
      });
  }

  else if (counter === 2) {
    $('.darkmode')
      .fadeOut(400, function () {
        $('.darkmode')
          .html('<i class="bi bi-brightness-high-fill"></i>')
          .fadeIn(400)
          .css({ 'background-color': '#51a2ff', 'color': 'yellow' });

        $('.card').css({ 'background': 'rgb(255, 255, 255)', 'color': 'black' });
        $('body').css({ 'background': 'linear-gradient(to right,#F0F2F0,#c0ddff)' });
        $('.card2').css({ 'background': '#ffffff', 'color': 'black' });
        $('.ejare').css({ 'background': '#ffffff', 'color': 'black' });
        $('.footer').css({ 'background': 'white', 'color': 'black' });
          $('.nav').css({'background-color': 'rgb(105, 170, 235)' , 'color' : 'white'})

        counter = 0;
      });
  }
})
$('.scroll').click(function(){
  $('html, body' ).animate({scrollTop: 0},'fast');
})
});



