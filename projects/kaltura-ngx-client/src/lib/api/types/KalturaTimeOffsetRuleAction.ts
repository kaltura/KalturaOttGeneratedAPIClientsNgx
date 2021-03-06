
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaTimeOffsetRuleActionArgs  extends KalturaAssetRuleActionArgs {
    offset? : number;
	timeZone? : boolean;
}


export class KalturaTimeOffsetRuleAction extends KalturaAssetRuleAction {

    offset : number;
	timeZone : boolean;

    constructor(data? : KalturaTimeOffsetRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeOffsetRuleAction' },
				offset : { type : 'n' },
				timeZone : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTimeOffsetRuleAction'] = KalturaTimeOffsetRuleAction;