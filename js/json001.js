// フォームID [isbn] に入力があった場合、jQueryの関数 [change] を使ってISBNコードを取得。
// Google Books APIへ問い合わせを行う。
// もしGoogle Books APIに書籍が存在しない(totalItemsが0の場合)、入力欄に表示されたデータをすべて消去し、該当書籍がないとメッセージを表示する

    $("#getBookInfo").change(function() {
      const isbn = $("#scanned-QR").val();
      const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

      $.getJSON(url, function(data) {
        if(!data.totalItems) {
          $("#isbn").val("");
          $("#BookTitle").text("");
          $("#BookAuthor").text("");
          $("#isbn10").text("");
          $("#isbn13").text("");
          $("#PublishedDate").text("");
          $("#BookThumbnail").text("");
          $("#BookDescription").text("");
          $("#BookMemo").val("");

          $("#message").html('<p class="bg-warning" id="warning">該当する書籍がありません。</p>');
          $('#message > p').fadeOut(3000);

        } else {

// 該当書籍が存在した場合、JSONから値を取得して入力項目のデータを取得する

          $("#BookTitle").text(data.items[0].volumeInfo.title);
          $("#isbn13").text(data.items[0].volumeInfo.industryIdentifiers[0].identifier);
          $("#isbn10").text(data.items[0].volumeInfo.industryIdentifiers[1].identifier);
          $("#BookAuthor").text(data.items[0].volumeInfo.authors[0]);
          $("#PublishedDate").text(data.items[0].volumeInfo.publishedDate);
          $("#BookDescription").text(data.items[0].volumeInfo.description);
          $("#BookThumbnail").html('<img src=\"' + data.items[0].volumeInfo.imageLinks.smallThumbnail + '\" />');

        }

      });
    });