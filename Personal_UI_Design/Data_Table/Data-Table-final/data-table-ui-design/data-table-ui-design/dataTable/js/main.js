$(document).ready(function() {
    var table = $(".export_table").DataTable( {
        lengthChange: true,
        buttons: [
            'print', 'copy', 'excel', 'pdf', 'colvis',
        ],
    
    });
    table.buttons().container()
        .insertBefore( '#example_filter' );
});

// $(document).ready(function() {

//         $('#example').DataTable( {
//             keys: true,
//         } );
// });
