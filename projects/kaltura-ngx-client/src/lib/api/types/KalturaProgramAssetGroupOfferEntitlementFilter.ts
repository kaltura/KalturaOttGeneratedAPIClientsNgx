
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntitlementFilter, KalturaBaseEntitlementFilterArgs } from './KalturaBaseEntitlementFilter';

export interface KalturaProgramAssetGroupOfferEntitlementFilterArgs  extends KalturaBaseEntitlementFilterArgs {
    
}


export class KalturaProgramAssetGroupOfferEntitlementFilter extends KalturaBaseEntitlementFilter {

    

    constructor(data? : KalturaProgramAssetGroupOfferEntitlementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferEntitlementFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramAssetGroupOfferEntitlementFilter'] = KalturaProgramAssetGroupOfferEntitlementFilter;