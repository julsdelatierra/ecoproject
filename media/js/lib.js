create_globe_project = function(name,year,description,image,position){
    row = "arrow_0"+position;
    title = name+" ["+year+"]";
    return '<div style="clear:both;"></div><div id="globe_portfolio" style="display:none;"><div class="'+row+'"></div><img id="logo" src="'+image+'" /><div id="title">'+title+'</div><div id="description">'+description+'</div></div>';
}

project_box = function(id,position,parent){
    $.ajax({
        url:'/projectdescription/',
        type:'POST',
        data:{'id':id},
        success:function(data){
            globe = create_globe_project(data['name'],data['year'],data['description'],data['image'],position);
            parent.append(globe);
            $('#globe_portfolio').fadeIn('slow');
        }
    });
};