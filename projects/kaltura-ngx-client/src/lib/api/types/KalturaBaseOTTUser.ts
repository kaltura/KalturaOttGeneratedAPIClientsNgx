
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseOTTUserArgs  extends KalturaObjectBaseArgs {
    username? : string;
	firstName? : string;
	lastName? : string;
}


export class KalturaBaseOTTUser extends KalturaObjectBase {

    readonly id : string;
	username : string;
	firstName : string;
	lastName : string;

    constructor(data? : KalturaBaseOTTUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseOTTUser' },
				id : { type : 's', readOnly : true },
				username : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseOTTUser'] = KalturaBaseOTTUser;