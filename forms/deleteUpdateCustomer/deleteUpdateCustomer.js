
var choiceDUC = ''
var delUp = ''
deleteUpdateCustomer.onshow=function(){
  drpDUC.clear()
  let showQuery = "SELECT name FROM customer ORDER BY name;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showQuery)
  if (req1.status == 200) { 
    resultsDUC1 = JSON.parse(req1.responseText)
    for (i = 0; i <= resultsDUC1.length - 1; i++)
      drpDUC.addItem(resultsDUC1[i][0])
  }
}

drpDUC.onclick=function(s){
  if (typeof(s) == "object")   
    return
  else {
    choiceDUC = s
  }
}


rdoDUC.onchange=function(){
  if (rdoDUC.value == 1) {
    inptDUC.show()
    //delUp = "up"
    //alert(delUp)
  } else if (rdoDUC.value == 0)
    inptDUC.hide()
    //delUp = "del"
}

btnDUCSubmit.onclick=function(){
  if (rdoDUC.value == 1) {
    let updateValue = inptDUC.value
    let upQuery = "UPDATE customer SET name = " + '"' + updateValue + '"' + " WHERE name = " + '"' + choiceDUC + '"'
    //alert(upQuery)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + upQuery)
    var messageDUC = ''
    let showUpQuery = "SELECT name FROM customer ORDER BY name;"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showUpQuery)
    if (req1.status == 200) { 
      resultsDUC2 = JSON.parse(req1.responseText)
      for (i = 0; i <= resultsDUC2.length - 1; i++)
        messageDUC = messageDUC + resultsDUC2[i][0] + "\n"
      txtDUC.value = messageDUC
    }
  } else if (rdoDUC.value == 0) {
    let delQuery = "DELETE FROM customer WHERE name = " + '"' + choiceDUC + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + delQuery)
    resultsDUC3 = JSON.parse(req1.responseText)
    var messageDUC2 = ""
    let showDelQuery = "SELECT DISTINCT name FROM customer ORDER BY name ASC;"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=jqb64765&query=" + showDelQuery)
    resultsDUC3 = JSON.parse(req1.responseText)
    for (i = 0; i <= resultsDUC3.length - 1; i++)
      messageDUC2 = messageDUC2 + resultsDUC3[i][0] + "\n"
    txtDUC.value = messageDUC2
  }
}

hamDUC.onclick=function(s){
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
