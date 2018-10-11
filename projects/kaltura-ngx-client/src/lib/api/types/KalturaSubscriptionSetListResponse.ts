
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscriptionSet } from './KalturaSubscriptionSet';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSubscriptionSetListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSubscriptionSet[];
}


export class KalturaSubscriptionSetListResponse extends KalturaListResponse {

    objects : KalturaSubscriptionSet[];

    constructor(data? : KalturaSubscriptionSetListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSetListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSubscriptionSet, subType : 'KalturaSubscriptionSet' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSubscriptionSetListResponse'] = KalturaSubscriptionSetListResponse;