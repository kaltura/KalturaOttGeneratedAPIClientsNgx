
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterActionArgs  extends KalturaAssetRuleActionArgs {
    
}


export class KalturaFilterAction extends KalturaAssetRuleAction {

    

    constructor(data? : KalturaFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterAction'] = KalturaFilterAction;