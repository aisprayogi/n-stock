var td0='', td1='', td2='', td3='', td4='';
// SAVES THE CHANGES MADE TO THAT ROW
  function saveIt(){
    var saveID = $(this).parents('button').attr("data-index");  // GET ITEM ID
    var saveROW = $("table").children().eq(1).children("tr").eq(saveID-1).children("td"); // GET ROW DATA
    // CHANGE BACK TO EDIT/DELETE BUTTONS
    saveROW.eq(4).html("<button class='btn btn-xs btn-primary' data-index='"+saveID+"' alt='Edit'><span class='glyphicon glyphicon-pencil'></span></button> " + 
                       " <button class='btn btn-xs btn-danger' data-index='"+saveID+"' alt='Delete'><span class='glyphicon glyphicon-trash'></span></button>");
    td0 = $("#td0").val().trim(); // GRAB VALUES OF FORM INPUTS
    td1 = $("#td1").val().trim();
    td2 = $("#td2").val().trim();
    // VALIDATION TO FORMAT PRICE CORRECTLY AFTER EDIT
      if(td2.indexOf("$") === -1){ td2 = "$" + td2; }
      if(td2.indexOf(".") === -1){ td2 = td2 + ".00"; }
      td2 = td2.split(".");
      if(td2[1] < 10 && td2[1] > 0){ td2[1] += "0"; }
      td2 = td2.join(".");
    td3 = $("#td3").val().trim();
    saveROW.eq(0).html(td0); // UPDATE THAT ROW OF THE TABLE
    saveROW.eq(1).html(td1);
    saveROW.eq(2).html(td2);
    saveROW.eq(3).html(td3);

    // SEND UPDATE TO MYSQL

  }
// REMOVES THE ITEM ON THAT ROW
  function removeIt(){
    var removeID = $(this).parents('button').attr("data-index");  // GET ITEM ID
    var removeROW = $("table").children().eq(1).children("tr").eq(removeID-1).children("td"); // GET ROW DATA
    td0 = removeROW.eq(0).text();     // STORE THE INITIAL VALUES OF THAT ROW'S <td>'s

    // SEND A DELETE REQUEST TO MYSQL

    $(this).closest('tr').remove(); // REMOVE THE ROW FROM THE TABLE
  }




// ENGAGES AN EDIT MODE FOR THAT ROW
function editIt(){
  var editID = $(this).parents('button').attr("data-index");
  var editROW = $("table").children().eq(1).children("tr").eq(editID-1).children("td");
  editROW.eq(4).html("<button class='btn btn-xs btn-success' data-index='" + editID + "' alt='Confirm'><span class='glyphicon glyphicon-ok'></span></button> " + 
                      " <button class='btn btn-xs btn-danger' data-index='" + editID + "' alt='Cancel'><span class='glyphicon glyphicon-remove'></span></button>");
  td0 = editROW.eq(0).text();     // STORE THE INITIAL VALUES OF THAT ROW'S <td>'s
  td1 = editROW.eq(1).text();
  td2 = editROW.eq(2).text();
  td3 = editROW.eq(3).text();
  editROW.eq(0).html("<input type='text' class='form-control' value='" + editROW.eq(0).text() + "' id='td0'>");
  editROW.eq(1).html("<input type='text' class='form-control' value='" + editROW.eq(1).text() + "' id='td1'>");
  editROW.eq(2).html("<input type='text' class='form-control' value='" + editROW.eq(2).text() + "' id='td2'>");
  editROW.eq(3).html("<input type='text' class='form-control' value='" + editROW.eq(3).text() + "' id='td3'>");
}
// CANCELS THE EDIT MODE
  function cancelIt(){
    var cancelID = $(this).parents('button').attr("data-index");  // GET ITEM ID
    var cancelROW = $("table").children().eq(1).children("tr").eq(cancelID-1).children("td"); // GET ROW DATA
    cancelROW.eq(4).html("<button class='btn btn-xs btn-primary' data-index='" + cancelID + "' alt='Edit'><span class='glyphicon glyphicon-pencil'></span></button> " + 
                            " <button class='btn btn-xs btn-danger' data-index='" + cancelID + "' alt='Delete'><span class='glyphicon glyphicon-trash'></span></button>");
    cancelROW.eq(0).html(td0); // RESET THE ROW BACK TO ORIGINAL VALUES
    cancelROW.eq(1).html(td1);
    cancelROW.eq(2).html(td2);
    cancelROW.eq(3).html(td3);
  }
  
// CLICK LISTENERS FOR EDIT BUTTONS
  $(document).on("click", ".glyphicon-ok", saveIt);
  $(document).on("click", ".glyphicon-pencil", editIt);
  $(document).on("click", ".glyphicon-trash", removeIt);
  $(document).on("click", ".glyphicon-remove", cancelIt);