
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaCampaignFilterArgs  extends KalturaCrudFilterArgs {
    
}


export class KalturaCampaignFilter extends KalturaCrudFilter {

    

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