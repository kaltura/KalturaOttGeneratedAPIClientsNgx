
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResponseStatusArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaResponseStatus extends KalturaObjectBase {

    readonly code : number;
	readonly message : string;

    constructor(data? : KalturaResponseStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseStatus' },
				code : { type : 'n', readOnly : true },
				message : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaResponseStatus'] = KalturaResponseStatus;