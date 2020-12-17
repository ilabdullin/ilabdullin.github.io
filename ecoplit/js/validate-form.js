// вешаем маску на телефон
    $('.phone-field').inputmask("+999 (99) 999-99-99");

    // добавляем правило для валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/g.test(value);
    });

    // получаем нашу форму по class
    var form = $('.form');

    // включаем валидацию в форме
    form.validate();

    // вешаем валидацию на поле с телефоном по классу
    $.validator.addClassRules({
        'phone-field': {
            checkMaskPhone: true,
        }
    });

    // Проверка на валидность формы при отправке, если нужно
    form.submit(function(e){
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
        }
        return;
    });
