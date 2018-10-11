
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOSSAdapterBaseProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
}


export class KalturaOSSAdapterBaseProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;

    constructor(data? : KalturaOSSAdapterBaseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOSSAdapterBaseProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOSSAdapterBaseProfile'] = KalturaOSSAdapterBaseProfile;