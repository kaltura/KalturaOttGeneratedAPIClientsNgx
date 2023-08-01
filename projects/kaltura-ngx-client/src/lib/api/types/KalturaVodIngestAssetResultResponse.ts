
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVodIngestAssetResultList } from './KalturaVodIngestAssetResultList';
import { KalturaVodIngestAssetResultAggregation } from './KalturaVodIngestAssetResultAggregation';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVodIngestAssetResultResponseArgs  extends KalturaObjectBaseArgs {
    result? : KalturaVodIngestAssetResultList;
	aggregations? : KalturaVodIngestAssetResultAggregation;
}


export class KalturaVodIngestAssetResultResponse extends KalturaObjectBase {

    result : KalturaVodIngestAssetResultList;
	aggregations : KalturaVodIngestAssetResultAggregation;

    constructor(data? : KalturaVodIngestAssetResultResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultResponse' },
				result : { type : 'o', subTypeConstructor : KalturaVodIngestAssetResultList, subType : 'KalturaVodIngestAssetResultList' },
				aggregations : { type : 'o', subTypeConstructor : KalturaVodIngestAssetResultAggregation, subType : 'KalturaVodIngestAssetResultAggregation' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVodIngestAssetResultResponse'] = KalturaVodIngestAssetResultResponse;