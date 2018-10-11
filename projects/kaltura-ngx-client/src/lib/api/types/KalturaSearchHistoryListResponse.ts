
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchHistory } from './KalturaSearchHistory';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSearchHistoryListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSearchHistory[];
}


export class KalturaSearchHistoryListResponse extends KalturaListResponse {

    objects : KalturaSearchHistory[];

    constructor(data? : KalturaSearchHistoryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSearchHistoryListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSearchHistory, subType : 'KalturaSearchHistory' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchHistoryListResponse'] = KalturaSearchHistoryListResponse;