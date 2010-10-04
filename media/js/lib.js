create_globe_project = function(position){
    return '<div style="clear:both;"</div><div id="globe_portfolio" style="display:none;"><div class="arrow_0'+position+'"></div></div>'
};

show_globe_first_time = function(parent,position){
    globe = create_globe_project(position);
    parent.append(globe);
    $('#globe_portfolio').slideDown('slow');
};

update_arrow_globe_project = function(position){
    $('#globe_portfolio').html('<div class="arrow_0'+position+'"></div>');
};

project_data_format = function(name,year,description,image){
    title = name+" ["+year+"]";
    return '<div id="hide" style="display:none;"><img id="logo" src="'+image+'" /><div id="title">'+title+'</div><div id="description">'+description+'</div></div>'
};

data_project_description = function(projectId,position,parent){
    $.ajax({
        url:'/projectdescription/',
        type:'POST',
        data:{'projectId':projectId},
        success:function(data){
            data_format = project_data_format(data['name'],data['year'],data['description'],data['image']);
            $('#globe_portfolio').append(data_format);
            $('#hide').fadeIn(2000);
        }
    });
};

write_question = function(id,text){
    question = '<span id="'+id+'" class="question_button">'+text+'</span>';
    $('#questions_container').append(question);
}

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
}

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
}

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
}