function titleCaseEdit(title) {
  // Insert code here;
  finaltitle = title.split(" ");
  for (let i = 0; i < finaltitle.length; i++){
    finaltitle[i] = finaltitle[i][0].toUpperCase() + finaltitle[i].substr(1);
  }
  title = finaltitle.join(" ");
  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;