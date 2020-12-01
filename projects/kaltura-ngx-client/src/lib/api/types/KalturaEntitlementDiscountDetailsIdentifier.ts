
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlementDiscountDetails, KalturaEntitlementDiscountDetailsArgs } from './KalturaEntitlementDiscountDetails';

export interface KalturaEntitlementDiscountDetailsIdentifierArgs  extends KalturaEntitlementDiscountDetailsArgs {
    
}


export class KalturaEntitlementDiscountDetailsIdentifier extends KalturaEntitlementDiscountDetails {

    readonly id : number;

    constructor(data? : KalturaEntitlementDiscountDetailsIdentifierArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementDiscountDetailsIdentifier' },
				id : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntitlementDiscountDetailsIdentifier'] = KalturaEntitlementDiscountDetailsIdentifier;