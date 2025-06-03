
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchableAttribute } from './KalturaSearchableAttribute';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchableAttributesArgs  extends KalturaObjectBaseArgs {
    items? : KalturaSearchableAttribute[];
}


export class KalturaSearchableAttributes extends KalturaObjectBase {

    items : KalturaSearchableAttribute[];

    constructor(data? : KalturaSearchableAttributesArgs)
    {
        super(data);
        if (typeof this.items === 'undefined') this.items = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchableAttributes' },
				items : { type : 'a', subTypeConstructor : KalturaSearchableAttribute, subType : 'KalturaSearchableAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchableAttributes'] = KalturaSearchableAttributes;