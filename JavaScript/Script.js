$(document).ready(function(){
    $(".Nav_bt_after").hide();
    $(".nav_ele_btn_con").click(function(){
        $(".nav_Ele_con_after").show();
        $(".Nav_bt_after").show();
        $(".nav_ele_btn_con").hide();
    })


    $(".Nav_bt_after").click(function(){
        $(".nav_Ele_con_after").hide();
        $(".Nav_bt_after").hide();
        $(".nav_ele_btn_con").show();

    })
})