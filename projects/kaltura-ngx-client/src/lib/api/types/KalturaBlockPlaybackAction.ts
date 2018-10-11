
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaBlockPlaybackActionArgs  extends KalturaAssetRuleActionArgs {
    
}


export class KalturaBlockPlaybackAction extends KalturaAssetRuleAction {

    

    constructor(data? : KalturaBlockPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBlockPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBlockPlaybackAction'] = KalturaBlockPlaybackAction;