class infoItemAjax {
  static requestAjax(id, key) {
    let info = null;
    var settings = {
      url: `https://www.divine-pride.net/api/database/Item/${id}?apiKey=${key}&server=bRO`,
      method: "GET",
      timeout: 0,
      async: false,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        info = "erro";
      },
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      info = response;
    });
    return info;
  }
}
