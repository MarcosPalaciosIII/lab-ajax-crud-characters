class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters`
    })
    .then((apiResults) => {
      console.log("SUCCESS");
      console.log(apiResults);

      $(".character-container").empty();

      apiResults.forEach((oneCharacter)=>{
        $(".characters-container").append(
          `
          <div class="character-info">
            <div class="name"> Name: ${oneCharacter.name} </div>
            <div class="occupation">Occupation: ${oneCharacter.occupation} </div>
            <div class="debt">Debt: ${oneCharacter.debt} </div>
            <div class="weapon">Weapon: ${oneCharacter.weapon} </div>
            <div class="id">ID: ${oneCharacter.id} </div>
          </div>
          `);
      });

    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err);
    });
  }

  getOneRegister (idNumber) {
    $.ajax({
      method: "GET",
      url: `${this.BASE_URL}/characters/${idNumber}/`
    })
    .then((apiResults) => {
      console.log("SUCCESS");
      console.log(apiResults);

      const oneCharacter = $(`

          <div class="character-info">
            <div class="name"> ${apiResults.name} </div>
            <div class="occupation"> ${apiResults.occupation} </div>
            <div class="debt"> ${apiResults.debt} </div>
            <div class="weapon"> ${apiResults.weapon} </div>
            <div class="id"> ${apiResults.id} </div>
          </div>
          `);

          $(".characters-container").html(oneCharacter

          );
      })

      .catch((err) => {
      console.log("ERROR!!");
      console.log(err);

      });
  }


  createOneRegister (charName, charJob, charWeapon) {
    $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters`,
      data: {
        name: charName,
        occupation: charJob,
        weapon: charWeapon,
      }
    })
    .then((apiResults) => {
      console.log("POST SUCCESS");
      console.log(apiResults);

      const newCharacter = $(`


        `);
        $(".characters-container").html(newCharacter);

    })
    .catch((err) => {
      console.log("ERROR ADDING CHARACTER");
      console.log(err);
    });


  }

  updateOneRegister () {

  }

  deleteOneRegister (idNumber) {
    $.ajax({
      method: "DELETE",
      url: `${this.BASE_URL}/characters/${idNumber}/`
    })
    .then((apiResults) => {
      console.log("SUCCESS DELETING");
      console.log(apiResults);

      const idNumber = $(`apiResults.id`).val();


    })
    .catch((err) => {
      console.log("ERROR DELETING");
      console.log(err);
    });
  }
}
