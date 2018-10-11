
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOTTUserTypeArgs  extends KalturaObjectBaseArgs {
    description? : string;
}


export class KalturaOTTUserType extends KalturaObjectBase {

    readonly id : number;
	description : string;

    constructor(data? : KalturaOTTUserTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTUserType' },
				id : { type : 'n', readOnly : true },
				description : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOTTUserType'] = KalturaOTTUserType;