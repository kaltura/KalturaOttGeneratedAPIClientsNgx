
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByQualityArgs  extends KalturaAssetRuleActionArgs {
    qualities? : string;
}


export class KalturaFilterFileByQuality extends KalturaAssetRuleAction {

    qualities : string;

    constructor(data? : KalturaFilterFileByQualityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQuality' },
				qualities : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByQuality'] = KalturaFilterFileByQuality;