
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaTagsMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    oneOf? : string;
}


export class KalturaTagsMetaConstraint extends KalturaBaseAttributeConstraint {

    oneOf : string;

    constructor(data? : KalturaTagsMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTagsMetaConstraint' },
				oneOf : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTagsMetaConstraint'] = KalturaTagsMetaConstraint;