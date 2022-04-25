
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCampaignFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaCampaignFilter extends KalturaFilter {

    

    constructor(data? : KalturaCampaignFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaignFilter'] = KalturaCampaignFilter;