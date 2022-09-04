
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseBulkUploadSegmentsResult, KalturaBaseBulkUploadSegmentsResultArgs } from './KalturaBaseBulkUploadSegmentsResult';

export interface KalturaBulkSegmentedHouseholdsResultArgs  extends KalturaBaseBulkUploadSegmentsResultArgs {
    
}


export class KalturaBulkSegmentedHouseholdsResult extends KalturaBaseBulkUploadSegmentsResult {

    

    constructor(data? : KalturaBulkSegmentedHouseholdsResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedHouseholdsResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkSegmentedHouseholdsResult'] = KalturaBulkSegmentedHouseholdsResult;