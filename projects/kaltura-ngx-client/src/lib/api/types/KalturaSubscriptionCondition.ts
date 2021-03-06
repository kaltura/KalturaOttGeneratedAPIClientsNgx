
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaSubscriptionConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaSubscriptionCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaSubscriptionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionCondition'] = KalturaSubscriptionCondition;