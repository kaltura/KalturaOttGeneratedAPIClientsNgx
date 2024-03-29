
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBasePromotion, KalturaBasePromotionArgs } from './KalturaBasePromotion';

export interface KalturaPromotionArgs  extends KalturaBasePromotionArgs {
    discountModuleId? : number;
	numberOfRecurring? : number;
	maxDiscountUsages? : number;
}


export class KalturaPromotion extends KalturaBasePromotion {

    discountModuleId : number;
	numberOfRecurring : number;
	maxDiscountUsages : number;

    constructor(data? : KalturaPromotionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPromotion' },
				discountModuleId : { type : 'n' },
				numberOfRecurring : { type : 'n' },
				maxDiscountUsages : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPromotion'] = KalturaPromotion;