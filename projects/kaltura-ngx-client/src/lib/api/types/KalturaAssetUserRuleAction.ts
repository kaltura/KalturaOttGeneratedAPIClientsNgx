
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAssetUserRuleActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaAssetUserRuleAction extends KalturaRuleAction {

    

    constructor(data? : KalturaAssetUserRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetUserRuleAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetUserRuleAction'] = KalturaAssetUserRuleAction;