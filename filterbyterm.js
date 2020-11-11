function filterByTerm(arrData, katakunciPencarian){
    return arrData.filter(function(arrayElement){
        return arrayElement.url.match(katakunciPencarian);
    });
}
module.exports = filterByTerm;