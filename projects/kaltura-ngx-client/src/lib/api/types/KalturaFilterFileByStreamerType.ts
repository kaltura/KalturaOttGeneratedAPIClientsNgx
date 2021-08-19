
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByStreamerTypeArgs  extends KalturaAssetRuleActionArgs {
    streamerTypes? : string;
}


export class KalturaFilterFileByStreamerType extends KalturaAssetRuleAction {

    streamerTypes : string;

    constructor(data? : KalturaFilterFileByStreamerTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerType' },
				streamerTypes : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByStreamerType'] = KalturaFilterFileByStreamerType;