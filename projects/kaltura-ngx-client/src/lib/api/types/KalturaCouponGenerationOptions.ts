
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponGenerationOptionsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaCouponGenerationOptions extends KalturaObjectBase {

    

    constructor(data? : KalturaCouponGenerationOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponGenerationOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCouponGenerationOptions'] = KalturaCouponGenerationOptions;