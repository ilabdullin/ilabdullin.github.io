// вешаем маску на телефон
    $('.phone-field').inputmask("+\\9\\98 (99) 999-99-99");

    // добавляем правило для валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\(\d{2}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    // получаем нашу форму по class
    var form = $('.form');


    // включаем валидацию в форме
    form.validate();


    // Проверка на валидность формы при отправке, если нужно
    form.submit(function(e){
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
        }
        return;
    });
