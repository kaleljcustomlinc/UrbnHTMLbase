$(document).ready(function(){

    // Navigation
    $('.nav-toggle, .nav .close').on('click', function(){
        $('header nav ul').toggleClass('open');
    });
    $('.cart-toggle, #cl_cart .close').on('click', function(){
        $('#cl_cart').toggleClass('open');
    });


    //  Spinners
    $(document).on('click', '.spinner .plus', function() {
        ql = $(this).siblings('.quantity').val();
        ql++;
        $(this).siblings('.quantity').val(ql);
    });
    $(document).on('click', '.spinner .minus', function() {
        if($(this).siblings('.quantity').val() !=0){
            ql = $(this).siblings('.quantity').val();
            ql--;
            $(this).siblings('.quantity').val(ql);
        }
    });

    //  Datepicker
    $('.datepicker').pickdate({
        format           : 'dd/mm/yyyy',
        formatSubmit     : 'dd/mm/yyyy',
        selectMonths     : true,
        selectYears      : 100
    });

    //  Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //  Active Toggle
    $('.btn-group-toggle .btn').on('click', function(){
        $(this).closest('.btn-group-toggle').find('.btn').removeClass('.active');
        if(!$(this).hasClass('active')) {
            $(this).closest('.btn-group-toggle').siblings('.btn-group-toggle__open').addClass('show');
        } else {
            $(this).closest('.btn-group-toggle').siblings('.btn-group-toggle__open').removeClass('show');
        }
    });
    $('.btn-group-toggle__open .close').on('click', function(){
        $(this).closest('.btn-group-toggle__open').removeClass('show');
    });

    //  Name Toggle (Surf / Learn Step 1)
    $('.spinner .plus').on('click', function(){
        $('.cl_session__names').addClass('open');
    });

    // Payment Inline Toggle
    $('.cl_checkout__payment__opts .btn').on('click', function(){
        if ($(this).children('input').attr('id') === 'visa' | $(this).children('input').attr('id') === 'mastercard' | $(this).children('input').attr('id') === 'amex'){
            $('.cl_checkout__payment__inline, .cl_book__actions__inline').addClass('show');
        } else {
            $('.cl_checkout__payment__inline, .cl_book__actions__inline').removeClass('show');
        }

    });

});

