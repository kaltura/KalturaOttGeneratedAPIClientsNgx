
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	permission : KalturaPermission;
}

/**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Update an existing permission
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export class PermissionUpdateAction extends KalturaRequest<KalturaPermission> {

    id : number;
	permission : KalturaPermission;

    constructor(data : PermissionUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermission', responseConstructor : KalturaPermission  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				permission : { type : 'o', subTypeConstructor : KalturaPermission, subType : 'KalturaPermission' }
            }
        );
        return result;
    }
}

