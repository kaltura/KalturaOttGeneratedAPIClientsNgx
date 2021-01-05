
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDuration } from './KalturaDuration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUnifiedBillingCycleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	duration? : KalturaDuration;
	paymentGatewayId? : number;
}


export class KalturaUnifiedBillingCycle extends KalturaObjectBase {

    name : string;
	duration : KalturaDuration;
	paymentGatewayId : number;

    constructor(data? : KalturaUnifiedBillingCycleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnifiedBillingCycle' },
				name : { type : 's' },
				duration : { type : 'o', subTypeConstructor : KalturaDuration, subType : 'KalturaDuration' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUnifiedBillingCycle'] = KalturaUnifiedBillingCycle;