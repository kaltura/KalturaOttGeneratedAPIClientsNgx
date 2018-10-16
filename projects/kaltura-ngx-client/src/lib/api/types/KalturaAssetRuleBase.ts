
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRule, KalturaRuleArgs } from './KalturaRule';

export interface KalturaAssetRuleBaseArgs  extends KalturaRuleArgs {
    
}


export class KalturaAssetRuleBase extends KalturaRule {

    

    constructor(data? : KalturaAssetRuleBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetRuleBase' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetRuleBase'] = KalturaAssetRuleBase;