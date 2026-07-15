
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseAttributeConstraintArgs  extends KalturaObjectBaseArgs {
    key? : string;
}


export class KalturaBaseAttributeConstraint extends KalturaObjectBase {

    key : string;

    constructor(data? : KalturaBaseAttributeConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseAttributeConstraint' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseAttributeConstraint'] = KalturaBaseAttributeConstraint;