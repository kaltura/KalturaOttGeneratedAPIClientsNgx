
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaAssetConditionBaseArgs  extends KalturaConditionArgs {
    
}


export class KalturaAssetConditionBase extends KalturaCondition {

    

    constructor(data? : KalturaAssetConditionBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetConditionBase' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetConditionBase'] = KalturaAssetConditionBase;