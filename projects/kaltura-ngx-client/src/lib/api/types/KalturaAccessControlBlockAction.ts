
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaAccessControlBlockActionArgs  extends KalturaAssetRuleActionArgs {
    
}


export class KalturaAccessControlBlockAction extends KalturaAssetRuleAction {

    

    constructor(data? : KalturaAccessControlBlockActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlBlockAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlBlockAction'] = KalturaAccessControlBlockAction;