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
            $('#hide').fadeOut('slow');
            $('#hide').fadeIn('slow');
        }
    });
};

questions_box = function(topicId){
    $.ajax({
        url:'/questionslist/',
        type:'POST',
        data:{'topicId':topicId},
        success:function(data){
            for(var d in data){
                console.log(d);
            }
        }
    });
};

get_answer = function(questionId){
    $.ajax({
        url:'/answer/',
        type:'POST',
        data:{'questionId':questionId},
        success:function(data){
            console.log(data);
        }
    });
};