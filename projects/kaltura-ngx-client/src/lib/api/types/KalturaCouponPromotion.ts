
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBasePromotion, KalturaBasePromotionArgs } from './KalturaBasePromotion';

export interface KalturaCouponPromotionArgs  extends KalturaBasePromotionArgs {
    couponGroupId? : number;
}


export class KalturaCouponPromotion extends KalturaBasePromotion {

    couponGroupId : number;

    constructor(data? : KalturaCouponPromotionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponPromotion' },
				couponGroupId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCouponPromotion'] = KalturaCouponPromotion;