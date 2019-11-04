
seeCustomers.onshow=function(){
  drpSee.clear()
  let showCustQuery = "SELECT name FROM customer ORDER BY name;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showCustQuery)
  if (req1.status == 200) { 
    resultsSC = JSON.parse(req1.responseText)
    var showSC = ""
    for (i = 0; i <= resultsSC.length - 1; i++)
      drpSee.addItem(resultsSC[i][0])
  }
}


drpSee.onclick=function(s){
  if (typeof(s) == "object")   
    return
  else {
    let seeQuery = "SELECT * FROM customer WHERE name = " + '"' + s + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + seeQuery)
    if (req1.status == 200) { 
      resultsSC2 = JSON.parse(req1.responseText)
      var infoSC = ""
      for (i = 0; i <= resultsSC2.length - 1; i++)
      infoSC = infoSC + resultsSC2[i][1] + "\n" + resultsSC2[i][2] + "\n" + resultsSC2[i][3] + ", " + resultsSC2[i][4] + " " + resultsSC2[i][5]
      txtSee.value = infoSC
    }
  }
}

hamSee.onclick=function(s){
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