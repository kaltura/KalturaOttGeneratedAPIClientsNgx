
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetUserRuleAction, KalturaAssetUserRuleActionArgs } from './KalturaAssetUserRuleAction';

export interface KalturaAssetUserRuleFilterActionArgs  extends KalturaAssetUserRuleActionArgs {
    
}


export class KalturaAssetUserRuleFilterAction extends KalturaAssetUserRuleAction {

    

    constructor(data? : KalturaAssetUserRuleFilterActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleFilterAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetUserRuleFilterAction'] = KalturaAssetUserRuleFilterAction;