import {request} from "@/network/request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}

export class goods {
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