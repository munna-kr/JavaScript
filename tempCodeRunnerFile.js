const objHuman = {
  sciName: 'HomoSapiens',
  category: 'Living-Things',
  origin: 'Earth',
};
objHuman.sciName = '1';
objHuman.newproperty = 'walking';
delete objHuman.sciName;
console.log(objHuman);
