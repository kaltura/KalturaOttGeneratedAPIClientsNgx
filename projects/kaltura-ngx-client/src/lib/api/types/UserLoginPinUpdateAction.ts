
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginPin } from './KalturaUserLoginPin';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinUpdateActionArgs  extends KalturaRequestArgs {
    pinCode : string;
	secret? : string;
	pinUsages? : number;
	pinDuration? : number;
}

/**
 * Build request payload for service 'userLoginPin' action 'update'.
 *
 * Usage: Set a time and usage expiry login-PIN that can allow a single login per PIN. If an active login-PIN already exists. Calling this API again for same user will add another login-PIN
 *
 * Server response type:         KalturaUserLoginPin
 * Server failure response type: KalturaAPIException
 */
export class UserLoginPinUpdateAction extends KalturaRequest<KalturaUserLoginPin> {

    pinCode : string;
	secret : string;
	pinUsages : number;
	pinDuration : number;

    constructor(data : UserLoginPinUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserLoginPin', responseConstructor : KalturaUserLoginPin  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userloginpin' },
				action : { type : 'c', default : 'update' },
				pinCode : { type : 's' },
				secret : { type : 's' },
				pinUsages : { type : 'n' },
				pinDuration : { type : 'n' }
            }
        );
        return result;
    }
}

