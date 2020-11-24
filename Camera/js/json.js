$(function() {
    $('#getBookInfo').click( function( e ) {
        e.preventDefault();
        const isbn = $("#scanned-QR").val();
        sessionStorage.setItem('isbn_key', isbn);
    });
});