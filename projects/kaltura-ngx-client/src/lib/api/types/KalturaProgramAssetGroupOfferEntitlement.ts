
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaProgramAssetGroupOfferEntitlementArgs  extends KalturaEntitlementArgs {
    
}


export class KalturaProgramAssetGroupOfferEntitlement extends KalturaEntitlement {

    

    constructor(data? : KalturaProgramAssetGroupOfferEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferEntitlement' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramAssetGroupOfferEntitlement'] = KalturaProgramAssetGroupOfferEntitlement;