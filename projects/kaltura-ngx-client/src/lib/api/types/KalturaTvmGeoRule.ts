
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTvmRule, KalturaTvmRuleArgs } from './KalturaTvmRule';

export interface KalturaTvmGeoRuleArgs  extends KalturaTvmRuleArgs {
    onlyOrBut? : boolean;
	countryIds? : string;
	proxyRule? : number;
	proxyLevel? : number;
}


export class KalturaTvmGeoRule extends KalturaTvmRule {

    onlyOrBut : boolean;
	countryIds : string;
	proxyRule : number;
	proxyLevel : number;

    constructor(data? : KalturaTvmGeoRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvmGeoRule' },
				onlyOrBut : { type : 'b' },
				countryIds : { type : 's' },
				proxyRule : { type : 'n' },
				proxyLevel : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTvmGeoRule'] = KalturaTvmGeoRule;