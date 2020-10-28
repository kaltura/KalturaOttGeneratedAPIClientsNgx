
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCampaignSearchFilter, KalturaCampaignSearchFilterArgs } from './KalturaCampaignSearchFilter';

export interface KalturaBatchCampaignSearchFilterArgs  extends KalturaCampaignSearchFilterArgs {
    
}


export class KalturaBatchCampaignSearchFilter extends KalturaCampaignSearchFilter {

    

    constructor(data? : KalturaBatchCampaignSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchCampaignSearchFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBatchCampaignSearchFilter'] = KalturaBatchCampaignSearchFilter;