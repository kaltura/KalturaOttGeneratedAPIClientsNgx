
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscriptionCondition, KalturaSubscriptionConditionArgs } from './KalturaSubscriptionCondition';

export interface KalturaAssetSubscriptionConditionArgs  extends KalturaSubscriptionConditionArgs {
    
}


export class KalturaAssetSubscriptionCondition extends KalturaSubscriptionCondition {

    

    constructor(data? : KalturaAssetSubscriptionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetSubscriptionCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetSubscriptionCondition'] = KalturaAssetSubscriptionCondition;