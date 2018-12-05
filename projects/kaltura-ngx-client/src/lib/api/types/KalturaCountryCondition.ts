
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaCountryConditionArgs  extends KalturaConditionArgs {
    not? : boolean;
	countries? : string;
}


export class KalturaCountryCondition extends KalturaCondition {

    not : boolean;
	countries : string;

    constructor(data? : KalturaCountryConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountryCondition' },
				not : { type : 'b' },
				countries : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCountryCondition'] = KalturaCountryCondition;