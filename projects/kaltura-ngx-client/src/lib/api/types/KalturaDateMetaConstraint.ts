
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAttributeConstraint, KalturaBaseAttributeConstraintArgs } from './KalturaBaseAttributeConstraint';

export interface KalturaDateMetaConstraintArgs  extends KalturaBaseAttributeConstraintArgs {
    equals? : number;
	greaterThan? : number;
	smallerThan? : number;
}


export class KalturaDateMetaConstraint extends KalturaBaseAttributeConstraint {

    equals : number;
	greaterThan : number;
	smallerThan : number;

    constructor(data? : KalturaDateMetaConstraintArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDateMetaConstraint' },
				equals : { type : 'n' },
				greaterThan : { type : 'n' },
				smallerThan : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDateMetaConstraint'] = KalturaDateMetaConstraint;