
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaSubscriptionPriceArgs  extends KalturaProductPriceArgs {
    endDate? : number;
}


export class KalturaSubscriptionPrice extends KalturaProductPrice {

    endDate : number;

    constructor(data? : KalturaSubscriptionPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionPrice' },
				endDate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionPrice'] = KalturaSubscriptionPrice;