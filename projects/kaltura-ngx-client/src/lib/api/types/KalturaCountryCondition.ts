
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNotCondition, KalturaNotConditionArgs } from './KalturaNotCondition';

export interface KalturaCountryConditionArgs  extends KalturaNotConditionArgs {
    countries? : string;
}


export class KalturaCountryCondition extends KalturaNotCondition {

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
				countries : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCountryCondition'] = KalturaCountryCondition;