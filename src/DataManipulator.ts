import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  trigger_alert:number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]):Row {
    const priceABC=(serveRespond[0].top_ask.price+serveRespond[0].top_bid.price)/2;
    const priceDEF=(serveRespond[1].top_ask.price+serveRespond[1].top_bid.price)/2;
    const upperBound=1+0.05;
    const lowerBound=1-0.05;
    return serverResponds.map((el: any) => {
      return {
        price_abc: priceABC,
        price_def: priceDEF,
        ratio,
        timestamp: serverRespond[0].timestamp> serverRespond[1].timestamp?serverRespond[0].timestamp> serverRespond[1].timestamp,
        upper_bound:upperBound,
        lower_bound:lowerBound,
        trigger_alter:(ratio>upperBound||ratio<lowerBound)?ratio:undefined,
      };
    }
  }
}
