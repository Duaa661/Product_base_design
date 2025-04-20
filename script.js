const products=document.getElementById('productimg')
const btn=document.getElementsByClassName('btn')
btn[0].onclick=function(){
    products.src="t.shirt.png";
    for(bt of btn){
        bt.classlist.remove('active');
    }
    this.classlist.add('active')
}
    btn[1].onclick=function(){
        products.src="left.png";
    }
        btn[2].onclick=function(){
            products.src="back.png";

}
 