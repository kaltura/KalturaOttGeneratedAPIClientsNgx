
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAssetOrder } from './KalturaBaseAssetOrder';
import { KalturaRepresentativeSelectionPolicy, KalturaRepresentativeSelectionPolicyArgs } from './KalturaRepresentativeSelectionPolicy';

export interface KalturaTopSubscriptionEntitledOrFreeRspArgs  extends KalturaRepresentativeSelectionPolicyArgs {
    orderBy? : KalturaBaseAssetOrder;
}


export class KalturaTopSubscriptionEntitledOrFreeRsp extends KalturaRepresentativeSelectionPolicy {

    orderBy : KalturaBaseAssetOrder;

    constructor(data? : KalturaTopSubscriptionEntitledOrFreeRspArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopSubscriptionEntitledOrFreeRsp' },
				orderBy : { type : 'o', subTypeConstructor : KalturaBaseAssetOrder, subType : 'KalturaBaseAssetOrder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTopSubscriptionEntitledOrFreeRsp'] = KalturaTopSubscriptionEntitledOrFreeRsp;