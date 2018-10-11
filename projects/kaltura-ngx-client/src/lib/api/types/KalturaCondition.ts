
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleConditionType } from './KalturaRuleConditionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConditionArgs  extends KalturaObjectBaseArgs {
    description? : string;
}


export class KalturaCondition extends KalturaObjectBase {

    readonly type : KalturaRuleConditionType;
	description : string;

    constructor(data? : KalturaConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCondition' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaRuleConditionType, subType : 'KalturaRuleConditionType' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCondition'] = KalturaCondition;