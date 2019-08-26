
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessModuleRuleAction, KalturaBusinessModuleRuleActionArgs } from './KalturaBusinessModuleRuleAction';

export interface KalturaApplyDiscountModuleActionArgs  extends KalturaBusinessModuleRuleActionArgs {
    discountModuleId? : number;
}


export class KalturaApplyDiscountModuleAction extends KalturaBusinessModuleRuleAction {

    discountModuleId : number;

    constructor(data? : KalturaApplyDiscountModuleActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApplyDiscountModuleAction' },
				discountModuleId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApplyDiscountModuleAction'] = KalturaApplyDiscountModuleAction;