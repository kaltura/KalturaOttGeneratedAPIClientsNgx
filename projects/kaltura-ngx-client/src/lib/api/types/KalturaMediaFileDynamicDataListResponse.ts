
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaFileDynamicData } from './KalturaMediaFileDynamicData';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaFileDynamicDataListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaMediaFileDynamicData[];
}


export class KalturaMediaFileDynamicDataListResponse extends KalturaListResponse {

    objects : KalturaMediaFileDynamicData[];

    constructor(data? : KalturaMediaFileDynamicDataListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaFileDynamicDataListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaMediaFileDynamicData, subType : 'KalturaMediaFileDynamicData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFileDynamicDataListResponse'] = KalturaMediaFileDynamicDataListResponse;