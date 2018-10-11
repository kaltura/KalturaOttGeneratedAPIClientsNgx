
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaFileType } from './KalturaMediaFileType';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaFileTypeListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaMediaFileType[];
}


export class KalturaMediaFileTypeListResponse extends KalturaListResponse {

    objects : KalturaMediaFileType[];

    constructor(data? : KalturaMediaFileTypeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaFileTypeListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaMediaFileType, subType : 'KalturaMediaFileType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFileTypeListResponse'] = KalturaMediaFileTypeListResponse;