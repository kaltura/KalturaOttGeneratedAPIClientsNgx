
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaCampaignSegmentFilterArgs  extends KalturaCampaignSearchFilterArgs {
    segmentIdEqual? : number;
}


export class KalturaCampaignSegmentFilter extends KalturaCampaignSearchFilter {

    segmentIdEqual : number;

    constructor(data? : KalturaCampaignSegmentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignSegmentFilter' },
				segmentIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaignSegmentFilter'] = KalturaCampaignSegmentFilter;