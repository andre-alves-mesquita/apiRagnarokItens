class ControllerDb {
  constructor() {}

  pesquisarItem(id) {
    var id = $("input[name=id]").val();

    for (let index = 5050; index < id; index++) {
      let info = infoItemAjax.requestAjax(index, key);

      console.log(info.id);

      if (info == "erro") {
      } else {
        let infoItem = `
        <div class="d-flex justify-content-around p-1 rounded mt-1 bg-warning">
            <div>
                <p>Id: ${info.id} <br> Nome: ${info.name} <br> Preço: ${info.price} <br>  Lv requerido: ${info.requiredLevel}</p>
            </div>
            <div class=""> 
                <img src="https://static.divine-pride.net/images/items/item/${index}.png?server=bRO" width="50" height="50">
            </div>
        </div>
        `;

        $("#infoItem").append(infoItem);
      }
    }
  }
}
