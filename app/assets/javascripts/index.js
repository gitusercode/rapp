$(function(){

    usersTable = $('#admin-users').DataTable({
        'bStateSave': true,
        'paging':     false,
        'info':       false,
        'dom':       'lrtip',
        columnDefs: [
            { targets: [-1, -2, -3], sortable: false }
        ]
    });

    $('.js-users-search').on( 'keyup click', function () {
        usersTable.search($(this).val()).draw();
    });


    $(document).on('click','.button_test',function(){
        $.ajax({
            url:'/users/add',
            type:'POST',
            dataType:'html',
            data:{t:1},
            success:function(html){
                $('div.insert').replaceWith(html);
            }
        });
    });
});