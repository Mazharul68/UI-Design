$(document).ready(function() {
    var table = $(".export_table").DataTable( {
        lengthChange: true,
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