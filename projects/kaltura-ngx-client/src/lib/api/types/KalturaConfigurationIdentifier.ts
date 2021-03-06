
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfigurationIdentifierArgs  extends KalturaObjectBaseArgs {
    id? : string;
	name? : string;
}


export class KalturaConfigurationIdentifier extends KalturaObjectBase {

    id : string;
	name : string;

    constructor(data? : KalturaConfigurationIdentifierArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationIdentifier' },
				id : { type : 's' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConfigurationIdentifier'] = KalturaConfigurationIdentifier;