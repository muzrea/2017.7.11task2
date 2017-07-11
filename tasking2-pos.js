/**
 * Created by muzrea on 17-7-11.
 */
var item = [
    {barcode:'ITM000000', name: '可口可乐', unit: '瓶', price: 3.00,count: 5},
    {barcode:'ITM000001', name: '雪碧', unit: '瓶', price: 3.00,count: 2},
    {barcode:'ITM000002', name: '电池', unit: '水', price: 2.00,count: 1}
];
function createGoods(items){
    var goods = new Array();
    for(var i=0;i<items.length;i++){
        goods[i] = items[i].price*items[i].count;
    }
    return goods;
}//task1
var good = createGoods(item);
var totalPrice = 0;
function calTotalPrcie(good){
    for(var j=0;j<good.length;j++){
        totalPrice += good[j];
    }
    return totalPrice;
    console.log(totalprice);
}
calTotalPrcie(good);
console.log("***"+"没钱赚商店"+"***");
for(var m=0;m<item.length;m++){
    console.log("名称 "+item[m].name+"， 数量 "+item[m].count+"， 单价 "+item[m].price+"， 小计 "+good[m]);
}
console.log("--------------------------------");
console.log("总计 "+totalPrice);
console.log("********************************");