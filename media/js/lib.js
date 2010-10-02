create_globe_project = function(name,year,description,image,position){
    row = "arrow_0"+position;
    title = name+" ["+year+"]";
    return '<div style="clear:both;"></div><div id="globe_portfolio" style="display:none;"><div class="'+row+'"></div><img id="logo" src="'+image+'" /><div id="title">'+title+'</div><div id="description">'+description+'</div></div>';
};

project_box = function(projectId,position,parent){
    $.ajax({
        url:'/projectdescription/',
        type:'POST',
        data:{'projectId':projectId},
        success:function(data){
            globe = create_globe_project(data['name'],data['year'],data['description'],data['image'],position);
            parent.append(globe);
            $('#globe_portfolio').fadeIn('slow');
        }
    });
};

questions_box = function(topicId){
    $.ajax({
        url:'/questionslist/',
        type:'POST',
        data:{'topicId',topicId},
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
}