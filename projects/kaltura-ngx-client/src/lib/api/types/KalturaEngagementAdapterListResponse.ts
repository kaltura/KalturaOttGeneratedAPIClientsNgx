
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEngagementAdapterListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEngagementAdapter[];
}


export class KalturaEngagementAdapterListResponse extends KalturaListResponse {

    objects : KalturaEngagementAdapter[];

    constructor(data? : KalturaEngagementAdapterListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEngagementAdapterListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEngagementAdapter, subType : 'KalturaEngagementAdapter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEngagementAdapterListResponse'] = KalturaEngagementAdapterListResponse;