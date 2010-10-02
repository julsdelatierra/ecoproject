$("document").ready(function(){
    $('.project_button').click(function(){
        if($('#globe_portfolio').html()!=null)
            $('#globe_portfolio').fadeOut('slow');
        project_box($(this).attr('id'),$(this).attr('position'),$(this).parent());
    });
    $('.topic_button').click(function(){
        questions_box($(this).attr('id'));
    });
    $('.question_button').click(function(){
        get_answer($(this).attr('id'));
        
    });
});