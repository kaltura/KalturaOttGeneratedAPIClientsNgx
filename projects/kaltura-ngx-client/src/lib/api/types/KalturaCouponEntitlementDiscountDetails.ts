
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlementDiscountDetails, KalturaEntitlementDiscountDetailsArgs } from './KalturaEntitlementDiscountDetails';

export interface KalturaCouponEntitlementDiscountDetailsArgs  extends KalturaEntitlementDiscountDetailsArgs {
    
}


export class KalturaCouponEntitlementDiscountDetails extends KalturaEntitlementDiscountDetails {

    readonly couponCode : string;
	readonly endlessCoupon : boolean;

    constructor(data? : KalturaCouponEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponEntitlementDiscountDetails' },
				couponCode : { type : 's', readOnly : true },
				endlessCoupon : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCouponEntitlementDiscountDetails'] = KalturaCouponEntitlementDiscountDetails;