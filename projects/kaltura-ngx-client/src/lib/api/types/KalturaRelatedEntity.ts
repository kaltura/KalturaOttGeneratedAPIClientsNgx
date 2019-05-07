
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedEntityType } from './KalturaRelatedEntityType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRelatedEntityArgs  extends KalturaObjectBaseArgs {
    id? : string;
	type? : KalturaRelatedEntityType;
}


export class KalturaRelatedEntity extends KalturaObjectBase {

    id : string;
	type : KalturaRelatedEntityType;

    constructor(data? : KalturaRelatedEntityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedEntity' },
				id : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaRelatedEntityType, subType : 'KalturaRelatedEntityType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRelatedEntity'] = KalturaRelatedEntity;