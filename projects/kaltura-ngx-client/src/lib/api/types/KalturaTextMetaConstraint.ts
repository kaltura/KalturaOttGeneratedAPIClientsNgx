
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaTextMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    contains? : string;
	equals? : string;
}


export class KalturaTextMetaConstraint extends KalturaBaseAttributeConstraint {

    contains : string;
	equals : string;

    constructor(data? : KalturaTextMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTextMetaConstraint' },
				contains : { type : 's' },
				equals : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTextMetaConstraint'] = KalturaTextMetaConstraint;