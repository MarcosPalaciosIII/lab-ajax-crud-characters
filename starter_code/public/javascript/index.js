const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList ();

  });


  $('#fetch-one').on('click', (e) => {
    const oneNumber = $(`#character-id`).val();
    charactersAPI.getOneRegister (oneNumber);

  });


  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();

    const idnumber = $(`#character-id-delete`).val();

  });


  $('#edit-character-form').on('submit', (e) => {


  });


  $('#newCharacterForm').on('submit', (e) => {
    event.preventDefault();

    const charName = $("#name").val();
    const charJob = $("#occupation").val();
    const charWeapon = $("#weapon").val();


    charactersAPI.createOneRegister(charName, charJob, charWeapon);

    const oneNumber = $(`#character-id`).val();
    $("new-character-form").trigger("reset");

  });
});
