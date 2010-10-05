var last_margin = null;

calculate_real = function(position){
    return parseInt(position)+parseInt(position-1);
};

calculate_margin = function(position){
    return (85*calculate_real(position))-29;
};

/*Ready*/
create_globe_project = function(position){
    margin = calculate_margin(position);
    last_margin = margin;
    image = '<img id="arrow" src="/medios/img/arrow_globo_portafolio.png" style="position:relative; left:'+margin+'px;" />'
    return '<div style="clear:both;"</div><div id="globe_portfolio" style="display:none;"><div class="arrow">'+image+'</div></div>'
};

/*Ready*/
show_globe_first_time = function(parent,position){
    globe = create_globe_project(position);
    parent.append(globe);
    $('#globe_portfolio').slideDown('slow');
};

update_arrow_globe_project = function(position){
    if(last_margin<calculate_margin(position)){
        temp_end = calculate_margin(position)-last_margin;
        $('#arrow').animate({
            left: '+='+temp_end
        },500);
    }
    else{
        temp_end = last_margin - calculate_margin(position);
        $('#arrow').animate({
            left: '-='+temp_end
        },500);
    }
    $('').insertAfter('#arrow');
    last_margin = calculate_margin(position);
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
