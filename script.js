
$('#div1>ul').on('click','li',function(e){
    console.log($(this))
    console.log(e)
    console.log(e.target)
     $('#moce').click(function(){
        console.log(e)
        $("#div2>ul").append(e.target);
      });
     
})




function moveF(){
 
}
function newList(){
    if($('#test').val() ){
    console.log($('#test').val())
    
    $("#div1>ul").append(`<li>${$('#test').val()}</li>`);
    // console.log(`<li>${$('#test').val()}</li>`)
    $('#test').val("")
    }
    else
    alert('field is empty')
}