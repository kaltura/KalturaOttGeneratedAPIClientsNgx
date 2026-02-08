
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaEntitlementConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    productIds? : string;
}


export class KalturaEntitlementConstraint extends KalturaBaseAttributeConstraint {

    productIds : string;

    constructor(data? : KalturaEntitlementConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementConstraint' },
				productIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntitlementConstraint'] = KalturaEntitlementConstraint;