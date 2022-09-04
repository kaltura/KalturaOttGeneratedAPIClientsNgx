
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseBulkSegments, KalturaBaseBulkSegmentsArgs } from './KalturaBaseBulkSegments';

export interface KalturaBulkSegmentedusersDataArgs  extends KalturaBaseBulkSegmentsArgs {
    
}


export class KalturaBulkSegmentedusersData extends KalturaBaseBulkSegments {

    

    constructor(data? : KalturaBulkSegmentedusersDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkSegmentedusersData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkSegmentedusersData'] = KalturaBulkSegmentedusersData;