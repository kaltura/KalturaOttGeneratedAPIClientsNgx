
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPrice, KalturaPriceArgs } from './KalturaPrice';

export interface KalturaDiscountArgs  extends KalturaPriceArgs {
    
}


export class KalturaDiscount extends KalturaPrice {

    readonly percentage : number;

    constructor(data? : KalturaDiscountArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscount' },
				percentage : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDiscount'] = KalturaDiscount;