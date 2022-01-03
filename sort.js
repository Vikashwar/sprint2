var prodata = productList;
lowprice.addEventListener("click", function () {
if (fltrData) {
prodata = fltrData;
}
console.log("here");
prodata = prodata.sort(function (a, b) {
return a.mrp - b.mrp;
});
displayproduct(prodata);
});
//---------------------
highprice.addEventListener("click", function () {
if (fltrData) {
prodata = fltrData;
}
console.log("here");
prodata = prodata.sort(function (a, b) {
return b.mrp - a.mrp;
});
display