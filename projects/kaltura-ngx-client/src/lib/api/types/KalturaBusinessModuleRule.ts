
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
import { KalturaApplyDiscountModuleAction } from './KalturaApplyDiscountModuleAction';
import { KalturaRule, KalturaRuleArgs } from './KalturaRule';

export interface KalturaBusinessModuleRuleArgs  extends KalturaRuleArgs {
    conditions? : KalturaCondition[];
	actions? : KalturaApplyDiscountModuleAction[];
}


export class KalturaBusinessModuleRule extends KalturaRule {

    conditions : KalturaCondition[];
	actions : KalturaApplyDiscountModuleAction[];

    constructor(data? : KalturaBusinessModuleRuleArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
		if (typeof this.actions === 'undefined') this.actions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessModuleRule' },
				conditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' },
				actions : { type : 'a', subTypeConstructor : KalturaApplyDiscountModuleAction, subType : 'KalturaApplyDiscountModuleAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessModuleRule'] = KalturaBusinessModuleRule;