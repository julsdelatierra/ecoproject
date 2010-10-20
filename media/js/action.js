$("document").ready(function(){
    var actual_globe_opened = null;
    var actual_question_pressed = null;
    var question = null;
    
    $('.topic_button:first').addClass("selected");
    questions_box($('.topic_button:first').attr('id'));
    
    preLoad = function() {
        if (!document.images) return;
        var ar = new Array();
        var arguments = preLoad.arguments;
        for (var i = 0; i < arguments.length; i++) {
            ar[i] = new Image();
            ar[i].src = '/medios/img/'+arguments[i];
        }
    };
    
    preLoad('item_menu_back.gif','item_menu_final_back.gif','item_menu_inicio_back.gif','google_maps_buttom_over.png','send_button_over.png');
    
    /*class="project_button" clicked*/
    $('.project_button').click(function(){
        globe_portfolio = $('#globe_portfolio').val();
        if(globe_portfolio==undefined){
            show_globe_first_time($(this).parent(),$(this).attr('position'));
            actual_globe_opened = $(this).parent().attr('position');
        }
        else{
            if(actual_globe_opened != $(this).parent().attr('position')){
                $('#globe_portfolio').remove();
                show_globe_first_time($(this).parent(), $(this).attr('position'));
                actual_globe_opened = $(this).parent().attr('position');
            }
            else{
                update_arrow_globe_project($(this).attr('position'));
            }
        }
        data_project_description($(this).attr('id'),$(this).attr('position'),$(this).parent());
    });
    
    /*class="topic_button" clicked*/
    $('.topic_button').click(function(){
        if($('.selected').val()!=undefined){
            $('.selected').removeClass('selected');
        }
        $(this).addClass('selected');
        questions_box($(this).attr('id'));
    });
    
    /*class="question_button" clicked*/
    $('.question_button').live('click',function(){
        if((actual_question_pressed != $(this).attr('id')) && (actual_question_pressed == null)){
            answer($(this));
            actual_question_pressed = $(this).attr('id');
            question = $(this).html();
            return;
        }
        if((actual_question_pressed == $(this).attr('id')) && (actual_question_pressed != null)){
            remove_answer_contact_area();
            actual_question_pressed = null;
            question = null;
            return;
        }
    });
    
    /*id="send_button" clicked*/
    $('#send_button').live('click',function(){
        re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        email_valid = re.test($('#email').val());
        if(email_valid&&$('#email').val()!=''){
            question_contact(question);
            actual_question_pressed = null;
            question = null;
        }
        else{
            $('#error_area').html('<div class="error" style="display:none">Verifica tu correo</div>');
            $('.error').slideDown('slow').delay(2000).slideUp('slow');
        }
    });
    
    /*id="name" clicked*/
    $('#name').live('focus',function(){
        if($(this).val()=='nombre'||$(this).val()=='name'){
            $(this).val('');
        }
    });
    
    /*id="email" clicked*/
    $('#email').live('focus',function(){
        if($(this).val()=='correo@servidor.com'||$(this).val()=='email@server.com'){
            $(this).val('');
        }
    });
    
    /*id="comment" clicked*/
    $('#comment').live('focus',function(){
        if($(this).val()=='comentario'||$(this).val()=='comment'){
            $(this).html('');
        }
    });
    
    $('#switch_language').click(function(){
        console.log('click');
        $.ajax({
            url:'/switchlanguage/',
            type:'POST',
            success:function(){
                console.log('fuck');
            }
        });
    });
    
    /*Contact page*/
    $('#form1 #name').live('focus',function(){
        console.log($(this).val());
        if($(this).val()=='Nombre'||$(this).val()=='Name'){
            $(this).val('');
        }
    });
    
    $('#form1 #phone').live('focus',function(){
        console.log($(this).val());
        if($(this).val()=='Telefono'||$(this).val()=='Phone'){
            $(this).val('');
        }
    });
    
    $('#form1 #email').live('focus',function(){
        console.log($(this).val());
        if($(this).val()=='Email'||$(this).val()=='correo'){
            $(this).val('');
        }
    });
    
    $('#form1 #comments').live('focus',function(){
        console.log($(this).val());
        if($(this).val()=='Pregunta'||$(this).val()=='Question'){
            $(this).html('');
        }
    });
    
});
