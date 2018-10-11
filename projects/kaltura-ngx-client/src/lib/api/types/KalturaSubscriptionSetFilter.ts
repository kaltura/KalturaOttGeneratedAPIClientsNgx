
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscriptionSetType } from './KalturaSubscriptionSetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubscriptionSetFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	subscriptionIdContains? : string;
	typeEqual? : KalturaSubscriptionSetType;
}


export class KalturaSubscriptionSetFilter extends KalturaFilter {

    idIn : string;
	subscriptionIdContains : string;
	typeEqual : KalturaSubscriptionSetType;

    constructor(data? : KalturaSubscriptionSetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSetFilter' },
				idIn : { type : 's' },
				subscriptionIdContains : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaSubscriptionSetType, subType : 'KalturaSubscriptionSetType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionSetFilter'] = KalturaSubscriptionSetFilter;