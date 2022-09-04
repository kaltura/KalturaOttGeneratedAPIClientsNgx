
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseBulkSegments, KalturaBaseBulkSegmentsArgs } from './KalturaBaseBulkSegments';

export interface KalturaBulkSegmentedHouseholdsDataArgs  extends KalturaBaseBulkSegmentsArgs {
    
}


export class KalturaBulkSegmentedHouseholdsData extends KalturaBaseBulkSegments {

    

    constructor(data? : KalturaBulkSegmentedHouseholdsDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedHouseholdsData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkSegmentedHouseholdsData'] = KalturaBulkSegmentedHouseholdsData;