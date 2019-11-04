
addCustomer.onshow=function(){
  lstAdd.clear()
  let addShowQuery = "SELECT name FROM customer ORDER BY name;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + addShowQuery)
  if (req1.status == 200) { 
    resultsAddShow = JSON.parse(req1.responseText)
    for (i = 0; i <= resultsAddShow.length - 1; i++)
      lstAdd.addItem(resultsAddShow[i][0])
  }
}

btnAdd.onclick=function(){
  newCust = inptAdd.value
  modAdd.value = `You are adding ${newCust}`
  modAdd.toggle()
  let addQuery = "INSERT INTO customer (name) VALUES (" + "'" + newCust + "')"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + addQuery)
  lstAdd.clear()
  if (req1.status == 200) {
    var showCAQuery = "SELECT name FROM customer ORDER BY name"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showCAQuery)
    resultsCA = JSON.parse(req1.responseText)
    for (i = 0; i <= resultsCA.length - 1; i++)
      lstAdd.addItem(resultsCA[i][0])
  }
}


hamAdd.onclick=function(s){
  if (typeof(s) == "object") 
    return
  switch (s) {
    case "See Customer":
      ChangeForm(seeCustomers)
      break;
    case "Add Customer":
      ChangeForm(addCustomer)
      break;
    case "Edit Customer":
      ChangeForm(deleteUpdateCustomer)
      break;
    case "Delete Customer":
      ChangeForm(deleteUpdateCustomer)
      break;
  }
}
/*
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  switch(s) {
    case "Login":
      ChangeForm(loginCU);
      break
    case "Favorite Foods":
      ChangeForm(favFoods);
      break
    case "Dessert Voting":
      ChangeForm(dessertVoting);
      break
    case "Describe Me":
      ChangeForm(describeYou);
      break
    case "Favorite Exercises":
      ChangeForm(favExercises);
      break
  }
}
*/