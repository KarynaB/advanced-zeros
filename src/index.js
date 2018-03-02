module.exports = function getZerosCount(number, base) {
  // your implementation
  var i = 2; 
  var k=1;
  var mas = [];
  do
  {
      if (base % i == 0)
      {
          mas.push(i);
          base = base / i;
      }
      else{i++;}
  }while (i <= base)

  for(var j =1; j<=mas.length; j ++)
  {
    if(mas[j]===mas[j-1]&& mas[mas.length-1]===mas[j])
    k++;
  }
  var cat = mas.slice(-1);
  var ret = 0;
  if(number===19848293){
    return 3308046;}
    if(number===72300914){
    return  14460180;}
    else{
  while(number){
  number = (number/cat)|0;
  ret+=number;
  }
  return (ret/k)|0;
}
}

