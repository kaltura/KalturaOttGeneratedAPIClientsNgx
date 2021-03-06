
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBulkUploadListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBulkUpload[];
}


export class KalturaBulkUploadListResponse extends KalturaListResponse {

    objects : KalturaBulkUpload[];

    constructor(data? : KalturaBulkUploadListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkUploadListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBulkUpload, subType : 'KalturaBulkUpload' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadListResponse'] = KalturaBulkUploadListResponse;