var apiComparator = require("api-comparator");
var fs = require("fs");

var text1 = fs.readFileSync("./data/file1.txt");
var text2 = fs.readFileSync("./data/file2.txt");

apiComparator.compareApi(text1, text2);
