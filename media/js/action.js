$("document").ready(function(){
    var actual_globe_opened = null;
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
    $('.topic_button').click(function(){
        questions_box($(this).attr('id'));
    });
    $('.question_button').click(function(){
        get_answer($(this).attr('id'));
    });
});