write_question = function(id,text){
    question = '<span id="'+id+'" class="question_button">'+text+'</span>';
    $('#questions_container').append(question);
};

questions_box = function(topicId){
    $.ajax({
        url:'/questionslist/',
        type:'POST',
        data:{'topicId':topicId},
        success:function(data){
            $('#questions_container').html('');
            for(var d in data){
                write_question(data[d]['id'],data[d]['text']);
            }
            $('#questions_container').hide(0);
            $('#questions_container').fadeIn('slow');
        }
    });
};

write_answer_and_dialog = function(sender,data){
    content = '<span id="answer+'+$(sender).attr('id')+'" class="answer" style="display:none;">'+data+'</span>'
    DIALOG = '\
    <div id="globe_faq_form" style="display:none;">\
        <div id="form_title">&iquest;A&uacute;n con dudas?, escr&iacute;benos.</div>\
        <table width="278" border="0">\
            <tr>\
                <td width="144">\
                    <input type="text" id="name" value="nombre"/>\
                </td>\
                <td colspan="2" rowspan="2">\
                    <textarea id="comment" cols="5" rows="5">comentario</textarea>\
                </td>\
            </tr>\
            <tr>\
                <td>\
                    <input type="text" id="email" value="correo@servidor.com"/>\
                </td>\
            </tr>\
            <tr>\
                <td>&nbsp;</td>\
                <td width="38">&nbsp;</td>\
                <td align="right" width="111">\
                    <input type="button" id="send_button" value="Enviar" />\
                </td>\
            </tr>\
        </table>\
    </div>'
    $(content+DIALOG).insertAfter(sender);
};

answer = function(sender){
    $.ajax({
        url:'/answer/',
        type:'POST',
        data:{'questionId':$(sender).attr('id')},
        success:function(data){
            answer_id = write_answer_and_dialog(sender,data);
            $('.answer').slideDown('slow');
            $('#globe_faq_form').slideDown('slow');
        }
    });
};

remove_answer_contact_area = function(){
    $('.answer').slideUp('slow',function(){
        $('.answer').remove();
    });
    $('#globe_faq_form').slideUp('slow',function(){
        $('#globe_faq_form').remove();
    });
};

question_contact = function(question){
    $.ajax({
        url:'/questioncontact/',
        type:'POST',
        data:{
            'question':question,
            'name':$('#name').val(),
            'email':$('#email').val(),
            'comment':$('#comment').val()
        },
        success:function(){
            remove_answer_contact_area();
        }
    });
};
