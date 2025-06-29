
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilteringCondition } from './KalturaFilteringCondition';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticAssetSearchPartnerConfigGetFilteringConditionActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticAssetSearchPartnerConfig' action 'getFilteringCondition'.
 *
 * Usage: Retrieve the filtering condition configuration for the partner
 *
 * Server response type:         KalturaFilteringCondition
 * Server failure response type: KalturaAPIException
 */
export class SemanticAssetSearchPartnerConfigGetFilteringConditionAction extends KalturaRequest<KalturaFilteringCondition> {

    

    constructor(data? : SemanticAssetSearchPartnerConfigGetFilteringConditionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFilteringCondition', responseConstructor : KalturaFilteringCondition  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticassetsearchpartnerconfig' },
				action : { type : 'c', default : 'getFilteringCondition' }
            }
        );
        return result;
    }
}

