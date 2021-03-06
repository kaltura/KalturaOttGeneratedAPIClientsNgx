
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUserRuleDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'assetUserRule' action 'delete'.
 *
 * Usage: Delete asset user rule
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class AssetUserRuleDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : AssetUserRuleDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetuserrule' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

