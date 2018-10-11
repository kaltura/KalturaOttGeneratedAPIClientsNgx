
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';
import { KalturaLoginSession } from './KalturaLoginSession';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLoginResponseArgs  extends KalturaObjectBaseArgs {
    user? : KalturaOTTUser;
	loginSession? : KalturaLoginSession;
}


export class KalturaLoginResponse extends KalturaObjectBase {

    user : KalturaOTTUser;
	loginSession : KalturaLoginSession;

    constructor(data? : KalturaLoginResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLoginResponse' },
				user : { type : 'o', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' },
				loginSession : { type : 'o', subTypeConstructor : KalturaLoginSession, subType : 'KalturaLoginSession' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLoginResponse'] = KalturaLoginResponse;