$(function() {
    $('#getBookInfo').click( function( e ) {
        e.preventDefault();
        const isbn = $("#scanned-QR").text();
        sessionStorage.setItem('isbn_key', isbn);
    });
});