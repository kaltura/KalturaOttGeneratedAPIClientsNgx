
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchPriorityGroup } from './KalturaSearchPriorityGroup';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSearchPriorityGroupListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSearchPriorityGroup[];
}


export class KalturaSearchPriorityGroupListResponse extends KalturaListResponse {

    objects : KalturaSearchPriorityGroup[];

    constructor(data? : KalturaSearchPriorityGroupListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSearchPriorityGroupListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSearchPriorityGroup, subType : 'KalturaSearchPriorityGroup' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchPriorityGroupListResponse'] = KalturaSearchPriorityGroupListResponse;