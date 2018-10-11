
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaCollectionEntitlementArgs  extends KalturaEntitlementArgs {
    
}


export class KalturaCollectionEntitlement extends KalturaEntitlement {

    

    constructor(data? : KalturaCollectionEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionEntitlement' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCollectionEntitlement'] = KalturaCollectionEntitlement;