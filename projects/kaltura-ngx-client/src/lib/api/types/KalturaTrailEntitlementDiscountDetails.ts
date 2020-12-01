
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlementDiscountDetailsIdentifier, KalturaEntitlementDiscountDetailsIdentifierArgs } from './KalturaEntitlementDiscountDetailsIdentifier';

export interface KalturaTrailEntitlementDiscountDetailsArgs  extends KalturaEntitlementDiscountDetailsIdentifierArgs {
    
}


export class KalturaTrailEntitlementDiscountDetails extends KalturaEntitlementDiscountDetailsIdentifier {

    

    constructor(data? : KalturaTrailEntitlementDiscountDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTrailEntitlementDiscountDetails' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTrailEntitlementDiscountDetails'] = KalturaTrailEntitlementDiscountDetails;