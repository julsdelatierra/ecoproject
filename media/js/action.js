$("document").ready(function(){
    $('.project_button').click(function(){
        if($('#globe_portfolio').html()!=null)
            $('#globe_portfolio').fadeOut('slow');
        project_box($(this).attr('id'),$(this).attr('position'),$(this).parent());
    });
});