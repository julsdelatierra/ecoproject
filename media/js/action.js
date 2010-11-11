$("document").ready(function(){
    /*SERVICES ACTION*/
    services = function(){
        for(var i=0; i<7; i++){
            $('#process').append('<li id="'+i+'">'+data[i].name+'</li>');
            $('#process #'+i).live('click',function(){
                $('#container_actions').hide();
                $('#actions_container').hide();
                $('#actions').html('');
                $('#actions_content').html('');
                processed = data[$(this).attr('id')].processed;
                $('#container_actions').fadeIn('fast');
                $('#actions_container').fadeIn('fast');
                for(var j=0; j<processed.length; j++){
                    $('#actions').append('<li id="'+j+'">'+processed[j].name+'</li>');
                    $('#actions_content').html(processed[0].content);
                    $('#actions #'+j).live('click',function(){
                        $('#container_actions').hide();
                        $('#actions_content').html(processed[$(this).attr('id')].content);
                        $('#container_actions').fadeIn('fast');
                    });
                }
            });
        }
    };
    services();
    /*SERVICES ACTION*/
    
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
        if($('.selected')!=undefined){
            $('.selected').removeClass('selected');
        }
        $(this).addClass('selected');
        questions_box($(this).attr('id'));
    });
    
    /*class="question_button" clicked*/
    $('.question_button').live('click',function(){
        if((actual_question_pressed != $(this).attr('id')) && (actual_question_pressed == null)){
            actual_question_pressed = $(this).attr('id');
            question = $(this).html();
            answer($(this));
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
            $('#error_area').html('<div class="error" style="display:none">Verifica tus datos</div>');
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
            type:'POST'
        });
    });
    
    /*Contact page*/
    $('#form1 #name').live('focus',function(){
        if($(this).val()=='Nombre'||$(this).val()=='Name'){
            $(this).val('');
        }
    });
    
    $('#form1 #phone').live('focus',function(){
        if($(this).val()=='Telefono'||$(this).val()=='Phone'){
            $(this).val('');
        }
    });
    
    $('#form1 #email').live('focus',function(){
        if($(this).val()=='Email'||$(this).val()=='Correo'){
            $(this).val('');
        }
    });
    
    $('#form1 #comments').live('focus',function(){
        if($(this).val()=='Pregunta'||$(this).val()=='Question'){
            $(this).html('');
        }
    });
    
    $('#contact').click(function(){
        re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        email_valid = re.test($('#form1 #email').val());
        if(email_valid&&$('#form1 #email').val()!=''){
            $.ajax({
                url:'/contact/',
                method:'POST',
                data:{},
                success:function(data){
                    $('#notice').slideDown('slow').delay(3000).slideUp('slow');
                },
                error:function(){
                    $('#error').slideDown('slow').delay(4000).slideUp('slow');
                }
            });
        }
        else{
            $('#error').slideDown('slow').delay(4000).slideUp('slow');
        }
    });
    
});
