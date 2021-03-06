
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionSet } from './KalturaSubscriptionSet';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionSetUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	subscriptionSet : KalturaSubscriptionSet;
}

/**
 * Build request payload for service 'subscriptionSet' action 'update'.
 *
 * Usage: Update the subscriptionSet
 *
 * Server response type:         KalturaSubscriptionSet
 * Server failure response type: KalturaAPIException
 */
export class SubscriptionSetUpdateAction extends KalturaRequest<KalturaSubscriptionSet> {

    id : number;
	subscriptionSet : KalturaSubscriptionSet;

    constructor(data : SubscriptionSetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscriptionSet', responseConstructor : KalturaSubscriptionSet  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscriptionset' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				subscriptionSet : { type : 'o', subTypeConstructor : KalturaSubscriptionSet, subType : 'KalturaSubscriptionSet' }
            }
        );
        return result;
    }
}

