
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBookmark } from './KalturaBookmark';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBookmarkListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBookmark[];
}


export class KalturaBookmarkListResponse extends KalturaListResponse {

    objects : KalturaBookmark[];

    constructor(data? : KalturaBookmarkListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBookmarkListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBookmark, subType : 'KalturaBookmark' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBookmarkListResponse'] = KalturaBookmarkListResponse;