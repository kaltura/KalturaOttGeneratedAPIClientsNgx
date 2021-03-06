
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAsset } from './KalturaAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAssetListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAsset[];
}


export class KalturaAssetListResponse extends KalturaListResponse {

    objects : KalturaAsset[];

    constructor(data? : KalturaAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAssetListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAsset, subType : 'KalturaAsset' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetListResponse'] = KalturaAssetListResponse;