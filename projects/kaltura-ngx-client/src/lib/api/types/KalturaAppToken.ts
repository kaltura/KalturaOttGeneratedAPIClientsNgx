
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAppTokenHashType } from './KalturaAppTokenHashType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAppTokenArgs  extends KalturaObjectBaseArgs {
    expiry? : number;
	sessionDuration? : number;
	hashType? : KalturaAppTokenHashType;
	sessionPrivileges? : string;
	sessionUserId? : string;
}


export class KalturaAppToken extends KalturaObjectBase {

    readonly id : string;
	expiry : number;
	readonly partnerId : number;
	sessionDuration : number;
	hashType : KalturaAppTokenHashType;
	sessionPrivileges : string;
	readonly token : string;
	sessionUserId : string;

    constructor(data? : KalturaAppTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppToken' },
				id : { type : 's', readOnly : true },
				expiry : { type : 'n' },
				partnerId : { type : 'n', readOnly : true },
				sessionDuration : { type : 'n' },
				hashType : { type : 'es', subTypeConstructor : KalturaAppTokenHashType, subType : 'KalturaAppTokenHashType' },
				sessionPrivileges : { type : 's' },
				token : { type : 's', readOnly : true },
				sessionUserId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAppToken'] = KalturaAppToken;