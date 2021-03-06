
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaHouseholdPaymentGatewaySelectedBy } from './KalturaHouseholdPaymentGatewaySelectedBy';
import { KalturaSuspendSettings } from './KalturaSuspendSettings';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdPaymentGatewayArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isDefault? : boolean;
	selectedBy? : KalturaHouseholdPaymentGatewaySelectedBy;
}


export class KalturaHouseholdPaymentGateway extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isDefault : boolean;
	selectedBy : KalturaHouseholdPaymentGatewaySelectedBy;
	readonly suspendSettings : KalturaSuspendSettings;

    constructor(data? : KalturaHouseholdPaymentGatewayArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdPaymentGateway' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isDefault : { type : 'b' },
				selectedBy : { type : 'es', subTypeConstructor : KalturaHouseholdPaymentGatewaySelectedBy, subType : 'KalturaHouseholdPaymentGatewaySelectedBy' },
				suspendSettings : { type : 'o', readOnly : true, subTypeConstructor : KalturaSuspendSettings, subType : 'KalturaSuspendSettings' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdPaymentGateway'] = KalturaHouseholdPaymentGateway;