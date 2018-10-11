
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTimeOffsetRuleAction, KalturaTimeOffsetRuleActionArgs } from './KalturaTimeOffsetRuleAction';

export interface KalturaStartDateOffsetRuleActionArgs  extends KalturaTimeOffsetRuleActionArgs {
    
}


export class KalturaStartDateOffsetRuleAction extends KalturaTimeOffsetRuleAction {

    

    constructor(data? : KalturaStartDateOffsetRuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStartDateOffsetRuleAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStartDateOffsetRuleAction'] = KalturaStartDateOffsetRuleAction;