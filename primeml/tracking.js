jQuery(function ($) {
    $(function () {
        $('#tracking_form input').keypress(function (e) {
            var key = e.which;
            if (key == 13) {
                $("#tracking_form .btn").click();
            }
        });
        $("#tracking_button_ru-RU").click(function () {
            var tracking_code = $("#code").val();
            if (tracking_code != "") {
                $('#myIframe').attr('src', "https://primeml-main.telegram-bots.uz/botweb/botweb/index?tracking_code=" + tracking_code);
                $("#tracking_download").attr('href', $("#tracking_download").attr('value') + tracking_code);
                $("#tracking_download").attr('style', 'color:white;display:block');
            }
            return false;
        });
        $("#tracking_button_en-US").click(function () {
            var tracking_code = $("#code").val();
            if (tracking_code != "") {
                $('#myIframe').attr('src', "https://primeml-main.telegram-bots.uz/botweb/botweb/index?tracking_code=" + tracking_code + "&lang=en");
                $("#tracking_download").attr('href', $("#tracking_download").attr('value') + tracking_code);
                $("#tracking_download").attr('style', 'color:white;display:block');
            }
            return false;
        });
    });
});










