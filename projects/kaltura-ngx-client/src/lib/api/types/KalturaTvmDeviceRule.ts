
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTvmRule, KalturaTvmRuleArgs } from './KalturaTvmRule';

export interface KalturaTvmDeviceRuleArgs  extends KalturaTvmRuleArgs {
    deviceBrandIds? : string;
}


export class KalturaTvmDeviceRule extends KalturaTvmRule {

    deviceBrandIds : string;

    constructor(data? : KalturaTvmDeviceRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvmDeviceRule' },
				deviceBrandIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTvmDeviceRule'] = KalturaTvmDeviceRule;