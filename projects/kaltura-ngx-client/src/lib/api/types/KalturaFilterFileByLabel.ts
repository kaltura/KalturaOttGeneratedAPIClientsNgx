
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByLabelArgs  extends KalturaAssetRuleActionArgs {
    labels? : string;
}


export class KalturaFilterFileByLabel extends KalturaAssetRuleAction {

    labels : string;

    constructor(data? : KalturaFilterFileByLabelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabel' },
				labels : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByLabel'] = KalturaFilterFileByLabel;