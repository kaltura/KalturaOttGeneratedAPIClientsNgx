
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTimeOffsetRuleAction, KalturaTimeOffsetRuleActionArgs } from './KalturaTimeOffsetRuleAction';

export interface KalturaEndDateOffsetRuleActionArgs  extends KalturaTimeOffsetRuleActionArgs {
    
}


export class KalturaEndDateOffsetRuleAction extends KalturaTimeOffsetRuleAction {

    

    constructor(data? : KalturaEndDateOffsetRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEndDateOffsetRuleAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEndDateOffsetRuleAction'] = KalturaEndDateOffsetRuleAction;