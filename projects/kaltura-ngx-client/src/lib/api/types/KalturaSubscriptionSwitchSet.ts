
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscriptionSet, KalturaSubscriptionSetArgs } from './KalturaSubscriptionSet';

export interface KalturaSubscriptionSwitchSetArgs  extends KalturaSubscriptionSetArgs {
    
}


export class KalturaSubscriptionSwitchSet extends KalturaSubscriptionSet {

    

    constructor(data? : KalturaSubscriptionSwitchSetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSwitchSet' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionSwitchSet'] = KalturaSubscriptionSwitchSet;