show_project_description = function(project_id){
    $.ajax({
        url:'/projectdescription/',
        type:'POST',
        data:{'project_id':project_id},
        success:function(data){
            console.log(data);
        }
    });
};