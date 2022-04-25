
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaHouseholdCouponArgs  extends KalturaOTTObjectSupportNullableArgs {
    code? : string;
	lastUsageDate? : number;
}


export class KalturaHouseholdCoupon extends KalturaOTTObjectSupportNullable {

    code : string;
	lastUsageDate : number;

    constructor(data? : KalturaHouseholdCouponArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdCoupon' },
				code : { type : 's' },
				lastUsageDate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdCoupon'] = KalturaHouseholdCoupon;