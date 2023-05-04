$(document).ready(function() {
    var table = $(".export_table").DataTable( {
        lengthChange: true,
        buttons: [
            'print', 'copy', 'excel', 'pdf',
        ],
    
    });
    table.buttons().container()
        .insertBefore( '#example_filter' );


                /**
  * Accordion Menu
  *
  * https://codepen.io/maggiben/pen/rCIFu
  */
//   $('.list-product-nav .list-product-cat').click(function(e) {
//     e.preventDefault();
//     $('.list-product-nav .list-product-subnav').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
//     e.stopPropagation();

//     var span = $(this).find('span.fas');
//     span.toggleClass('active');
//   }); 
  
});

// $(document).ready(function() {

//         $('#example').DataTable( {
//             keys: true,
//         } );
// });
