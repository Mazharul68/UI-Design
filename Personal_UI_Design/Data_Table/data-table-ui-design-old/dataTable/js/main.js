$(document).ready(function() {
    var table = $('#examdple').DataTable( {
        lengthChange: false,
        buttons: [
            'print', 'copy', 'excel', 'pdf', 'colvis',
        ],
    
    });
    table.buttons().container()
        .insertBefore( '#example_filter' );


        $('#example').DataTable( {
            keys: true,
        } );
});
// $(document).ready(function() {
//     $('.show_entries').DataTable( {
//         keys: true
//     } );


// });