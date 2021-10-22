import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export function getrecommend(){
  return request({
    url:'recommend'
  })
}

export class goodsinfo {
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newprice = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.realprice = itemInfo.lowNowPrice
  }
}

export class info {
  constructor(shopInfo) {
    this.shoplogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

export class param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}

