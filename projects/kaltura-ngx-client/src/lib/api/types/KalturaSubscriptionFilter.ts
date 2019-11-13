
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSubscriptionFilterArgs  extends KalturaFilterArgs {
    subscriptionIdIn? : string;
	mediaFileIdEqual? : number;
	externalIdIn? : string;
	couponGroupIdEqual? : number;
}


export class KalturaSubscriptionFilter extends KalturaFilter {

    subscriptionIdIn : string;
	mediaFileIdEqual : number;
	externalIdIn : string;
	couponGroupIdEqual : number;

    constructor(data? : KalturaSubscriptionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionFilter' },
				subscriptionIdIn : { type : 's' },
				mediaFileIdEqual : { type : 'n' },
				externalIdIn : { type : 's' },
				couponGroupIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionFilter'] = KalturaSubscriptionFilter;